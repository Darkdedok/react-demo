import './App.css';
import SimpsonCharacter from "./Characters/Simpsons/Simpsons";
function App(props) {
    return (
        <div>
            <SimpsonCharacter name={'Bart'}
                              biography={'Bart is a self-proclaimed underachiever and prankster who is constantly in detention who in addition to his behavior is easily distracted. '}
                              picture={'https://static.wikia.nocookie.net/simpsons/images/6/65/Bart_Simpson.png'}
            />
            <SimpsonCharacter name={'Lisa Simpson'}
                              biography={'Lisa is quite eclectic in her knowledge and is notably more concerned with world affairs and problems than her cohorts, which has led her to alienate herself from her peers.'}
                              picture={'https://static.wikia.nocookie.net/simpsons/images/d/d5/Lisa_Simpson_official.png'}
            />
            <SimpsonCharacter name={'Maggie Simpson'}
                              biography={'When Marge became pregnant with Lisa, she and Homer bought their first home. Seven years later, Homer felt financially secure enough to quit his job at the power plant and take his dream job at Barney\'s Bowlarama.'}
                              picture={'https://static.wikia.nocookie.net/simpsons/images/9/9d/Maggie_Simpson.png'}
            />
            <SimpsonCharacter name={'Marge Simpson'}
                              biography={'Marge Bouvier was born on in Capital City to Clancy Bouvier, a photographer-turned-steward, and Jacqueline Bouvier.'}
                              picture={'https://static.wikia.nocookie.net/simpsons/images/4/4d/MargeSimpson.png'}
            />
            <SimpsonCharacter name={'Homer Simpson'}
                              biography={'Homer Jay Simpson was born on May 12, 1956 to Abraham Simpson II and Mona Olsen. He was raised on the Simpson family farm until they were forced to move out due to Homer jumping out of a hay bale and scaring the cows into giving sour milk, causing the bank to foreclose it.'}
                              picture={'https://static.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png'}
            />
        </div>
    );
}
export default App;