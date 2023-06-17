
# String formatter
code to parse data represented in different formats and normalize to the following format:

  `<first name> <city name> <birth date M/D/YYYY>`

## Initial setup

 ```
  bundle install
  rspec
 ```

## Example

```
  comma_formatter = StringFormatter.new('Mckayla, Atlanta, 5/29/1986')
  comma_formatter.normalize 
  # Mckayla Atlanta 5/29/1986

  dollar_formatter = StringFormatter.new('LA $ 10-4-1974 $ Nolan $ Rhiannon')
  dollar_formatter.normalize 
  # Rhiannon Los Angeles 10/4/1974
```
