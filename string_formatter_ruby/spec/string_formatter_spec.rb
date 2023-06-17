require "spec_helper"

describe StringFormatter do
  describe "#normalize" do 
    context "return correct result from text with comma" do 
      it "normalize 'Mckayla, Atlanta, 5/29/1986'" do 
        string_formatter = StringFormatter.new('Mckayla, Atlanta, 5/29/1986')  
        expect(string_formatter.normalize).to eq('Mckayla Atlanta 5/29/1986')
      end 

      it "normalize 'Elliot, New York City, 4/3/1947'" do 
        string_formatter = StringFormatter.new('Elliot, New York City, 4/3/1947')  
        expect(string_formatter.normalize).to eq('Elliot New York City 4/3/1947')
      end 
    end

    context "return correct result from text with dollar" do 
      it "normalize 'LA $ 10-4-1974 $ Nolan $ Rhiannon'" do
        string_formatter = StringFormatter.new('LA $ 10-4-1974 $ Nolan $ Rhiannon')  
        expect(string_formatter.normalize).to eq('Rhiannon Los Angeles 10/4/1974')
      end

      it "normalize 'NYC $ 12-1-1962 $ Bruen $ Rigoberto'" do
        string_formatter = StringFormatter.new('NYC $ 12-1-1962 $ Bruen $ Rigoberto')  
        expect(string_formatter.normalize).to eq('Rigoberto New York City 12/1/1962')
      end
    end
  end
end