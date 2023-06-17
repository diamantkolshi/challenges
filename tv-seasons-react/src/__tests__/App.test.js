
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from '../App.js';
import data from '../data.json';

describe('App component', () => {
  it('Films button is selected by default', () => {
    render(<App />);
    const filmsButton = screen.getByText('Films');
    expect(filmsButton).toHaveClass('btn-primary');
  });

  it('TV Seasons button is not selected by default', () => {
    render(<App />);
    const tvSeasonsButton = screen.getByText('TV Seasons');
    expect(tvSeasonsButton).not.toHaveClass('btn-primary');
  });

  it('Clicking TV Seasons button selects it and deselects Films button', () => {
    render(<App />);
    const tvSeasonsButton = screen.getByText('TV Seasons');
    const filmsButton = screen.getByText('Films');
    
    fireEvent.click(tvSeasonsButton);
    
    expect(tvSeasonsButton).toHaveClass('btn-primary');
    expect(filmsButton).not.toHaveClass('btn-primary');
  });

  it('Clicking Films button selects it and deselects TV Seasons button', () => {
    render(<App />);
    const tvSeasonsButton = screen.getByText('TV Seasons');
    const filmsButton = screen.getByText('Films');
    
    fireEvent.click(tvSeasonsButton);
    fireEvent.click(filmsButton);
    
    expect(filmsButton).toHaveClass('btn-primary');
    expect(tvSeasonsButton).not.toHaveClass('btn-primary');
  });

  it('Films are displayed when Films button is selected', () => {
    render(<App />);
    const films = data.films;
    const filmsButton = screen.getByText('Films');
    
    fireEvent.click(filmsButton);
    
    films.forEach((film) => {
      expect(screen.getByText(film.name)).toBeInTheDocument();
    });
  });

  it('TV Seasons are displayed when TV Seasons button is selected', () => {
    render(<App />);
    const tvSeasons = data.tv_seasons;
    const tvSeasonsButton = screen.getByText('TV Seasons');
    
    fireEvent.click(tvSeasonsButton);
    
    tvSeasons.forEach((season) => {
      expect(screen.getByText(season.name)).toBeInTheDocument();
    });
  });

  it('Buy and rent prices are displayed for TV Films that have a single episode', () => {
    render(<App />);
    const tvFilmsButton = screen.getByText('TV Seasons');
    
    fireEvent.click(tvFilmsButton);
  
    const tvFilmsWithSingleEpisode = data.tv_seasons.filter((season) => season.episodes.length === 1);
    tvFilmsWithSingleEpisode.forEach((season) => {
      const tvFilm = screen.getByText(season.name);
      fireEvent.click(tvFilm);
  
      expect(screen.getByText(`Price (Buy): ${season.prices.buy}`)).toBeInTheDocument();
      expect(screen.getByText(`Price (Rent): ${season.prices.rent}`)).toBeInTheDocument();
    });
  });

  it('renders sorted films', () => {
    render(<App />);
    const films = screen.getAllByTestId('film');
    
    // Check if there are at least two films
    expect(films.length).toBeGreaterThan(1);
  
    // Check if the films are sorted by release year
    const releaseYears = films.map((film) => Number(film.getAttribute('data-release-year')));
    expect(releaseYears).toEqual([...releaseYears].sort());
  });
});