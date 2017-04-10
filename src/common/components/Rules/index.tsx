import { div } from 'stylish-components'
import Markdown from 'react-markdown'

const rulesMd = `
The Black Cat is a trick-taking playing card game for four players.
It is a variant of [Hearts](https://en.wikipedia.org/wiki/Hearts).
One of key differences is that it is played with only 32 cards, therefore German playing cards can be used as well as the French ones.
The goal is to have the fewest points by the end of the game.

## New game

Eight cards are dealt to each player.

Each player passes three cards from his hand to player on his left.

Any player can grill cards.
That means he can visibly put three Heart cards or Queen of Spades (The Black Cat) from his hand on table.
By doing this, penalty points of Hearts or of Queen of Spades are doubled.
If anyone else (or the player himself) grills another three Hearts cards, penalty points of Hearts are tripled.
The player can play these cards the same way as he would play a card from hand.

Random player is chosen to start the game.

## Round

The player on turn plays a card.

The player on left must play a card of the same suit as the card of the player that started the round.
If he does not have such a card, he can play any card.
Other players play a card as well in clock-wise direction.

The player whose card has the highest rank, gets the trick (the four cards on table).
He puts the trick onto his pile (reverse side visible).
Cards that are not of the same suit as the first card on table are ignored.

In the next round begins the player that got the trick.

## End of the game

After players do not have any cards to play, the game ends.
The winner is the player with the fewest penalty points.

## Scoring

Only Hearts and Queen of Spades cost penalty points.
Seven, Eight, Nine And Ten of Hearts cost 1 point.
Jack costs 2, Queen 3, King 4 and Ace 5.
Queen of Spades costs 13 penalty points.
`

const Wrapper = div([{
  padding: '10px 30px',
}])

const Rules = () => (
  <Wrapper>
    <h1>Game rules</h1>
    <Markdown source={rulesMd} />
  </Wrapper>
)

export default Rules