import React,{useState} from "react";

export default function About() {
    const changeColor=()=>{
      setTheme(!theme);
    }
    const [theme,setTheme]=useState(false)
  return (
    <>
      <h1 className="my-3" id="web" style={{
        color:theme?'white':'black'
      }}>
        <b>A WebPage Dedicated to three Icons of Cricket</b>
      </h1>
      <div className="container my-2" style={{
         backgroundColor: theme ? "black" : "white",
      }}>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button id="icon-1"
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <b>Mahendra Singh Dhoni</b>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div id="profile-1" className="accordion-body" style={{
              backgroundColor:theme?'yellow':'black',
              color:theme?'black':'white'
            }}>
              Mahendra Singh Dhoni (<strong>born 7 July 1981</strong>) is an
              Indian professional cricketer who plays as a right-handed batter
              and a wicket-keeper. Widely regarded as one of the most prolific
              wicket-keeper batsmen and captains, he represented the Indian
              cricket team and was the captain of the team in limited overs
              formats from 2007 to 2017 and in Test cricket from 2008 to 2014.
              Dhoni has captained the most international matches and is the most
              successful Indian captain. He has led India to victory in the 2007
              ICC World Twenty20, the 2011 Cricket World Cup, and the 2013 ICC
              Champions Trophy, being the only captain to win three different
              limited overs ICC tournaments. He also led the teams that won the
              Asia Cup in 2010 and 2016, and he was a member of the title
              winning squad in 2018.
              <br />
              Born in Ranchi, Dhoni made his first class debut for Bihar in
              1999. He made his debut for the Indian cricket team on 23 December
              2004 in an ODI against Bangladesh and played his first test a year
              later against Sri Lanka. In 2007, he became the captain of the ODI
              team before taking over in all formats by 2008. Dhoni retired from
              Test cricket in 2014 but continued playing in limited overs
              cricket till 2019. He has scored 17,266 runs in international
              cricket including 10,000 plus runs at an average of more than 50
              in ODIs.
              <br />
              In the Indian Premier League (IPL), Dhoni plays for Chennai Super
              Kings (CSK), leading them to the final on ten occasions and
              winning it five times (2010, 2011, 2018, 2021 and 2023) jointly
              sharing this record with Rohit Sharma. He has also led CSK to two
              Champions League T20 titles in 2010 and 2014. Dhoni is among the
              few batsmen to have scored more than five thousand runs in the
              IPL, as well as being the first wicket-keeper to do so.
              <br />
              In 2008, Dhoni was awarded India's highest sport honour Major
              Dhyan Chand Khel Ratna Award by Government of India. He received
              the fourth highest civilian award Padma Shri in 2009 and third
              highest civilian award Padma Bhushan in 2018. Dhoni holds an
              honorary rank of Lieutenant colonel in the Parachute Regiment of
              the Indian Territorial Army which was presented to him by the
              Indian Army in 2011. In June 2025, he was inducted into{" "}
              <strong>ICC Cricket Hall of Fame.</strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              id="icon-2"
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <b>Rohit Sharma</b>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div id="profile-2" className="accordion-body" style={{
              backgroundColor:theme?'blue':'black',
              color:theme?'black':'white'
            }}>
              Rohit Gurunath Sharma (<strong>born 30 April 1987</strong>) is an
              Indian international cricketer and the former captain of the India
              national cricket team in all formats of the game.[3] He is a
              right-handed top-order batter. He represents Mumbai in domestic
              cricket and Mumbai Indians in the Indian Premier League. Sharma
              was a member of the teams that won the 2007 T20 World Cup, the
              2013 ICC Champions Trophy and was the winning captain of the 2024
              T20 World Cup and the 2025 ICC Champions Trophy.
              <br />
              Sharma holds several batting records which include most runs in
              T20 Internationals, most sixes in international cricket,[a] most
              double centuries in ODI cricket (3), most centuries at Cricket
              World Cups (7) and joint most hundreds in Twenty20 Internationals
              (5).[5] He also holds the world record for the highest individual
              score (264) in a One Day International (ODI) and also holds the
              record for scoring most hundreds (five) in a single Cricket World
              Cup, for which he won the ICC Men's ODI Cricketer of the Year
              award in 2019.[6] He is the first and only captain to lead a team
              in all[b] ICC tournament finals.[7]
              <br />
              He formerly captained Mumbai Indians and the team has won five
              Indian Premier League titles in 2013, 2015, 2017, 2019 and 2020
              under him, making him the most successful captain in IPL history,
              sharing this record with MS Dhoni. He is also one of two players
              who have played in every edition of the T20 World Cup, from the
              inaugural edition in 2007 till 2024.[c] He is the only Indian
              player to win two T20 World Cups. He became the second Indian
              captain to win a T20 World Cup.
              <br />
              He has received two national honours, the Arjuna Award in 2015 and
              the prestigious Khel Ratna Award in 2020 by the Government of
              India. Under his captaincy, India won the 2018 Asia Cup and the
              2023 Asia Cup, the seventh and eighth time the country won the
              title, both in ODI format as well as the 2018 Nidahas Trophy,
              their second overall and first in T20I format.
              <br />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              id="icon-3"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <b>Virat Kohli</b>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div id="profile-3" className="accordion-body" style={{
                backgroundColor:theme?'red':'black',
                color:theme?'black':'white'
            }}>
              Virat Kohli[a] (<strong>born 5 November 1988</strong>) is an
              Indian international cricketer and the former all-format captain
              of the Indian national cricket team.[3] He is a right-handed
              batter and occasional right-arm medium-pace bowler. Considered one
              of the greatest all-format batsmen in the history of cricket, he
              has been acclaimed for his batting skills and records.[4] Kohli
              has the most centuries in ODIs and the second-most centuries in
              international cricket with 85 tons across all formats. He is also
              the leading run-scorer in the Indian Premier League.[5] Kohli is
              the most successful Test captain of India, with the most wins and
              3 consecutive Test mace retainments.[6] He is the only batter to
              earn 900+ rating points across all 3 formats.[7]
              <br />
              Kohli was the captain of the 2008 U19 World Cup winning team and
              was a crucial member of the teams that won 2011 ODI World Cup,
              2013 Champions Trophy, 2024 T20 World Cup, and 2025 Champions
              Trophy. He plays for Royal Challengers Bengaluru in the Indian
              Premier League and for Delhi in domestic cricket. In 2013, Kohli
              was ranked number one in the ODI batting rankings. In 2015, he
              achieved the same in T20I.[8] In 2018, he was ranked number one in
              Test, making him the only Indian to hold the number one spot in
              all three formats. He is the first player to score 20,000 runs in
              a decade. He was the Cricketer of the Decade for 2011 to 2020.[9]
              <br />
              Kohli has won ten ICC Awards, making him the most awarded player
              in international cricket history. He won the ODI Player of the
              Year award four times in 2012, 2017, 2018, and 2023. He won the
              Cricketer of the Year award, on two occasions, in 2017 and 2018.
              In 2018, he became the first player to win all three major awards
              including Cricketer of the Year, ODI Player of the Year and Test
              Player of the Year in the same year. He was honored with the
              Spirit of Cricket Award in 2019 and given the Cricketer of the
              Decade and ODI Cricketer of the Decade in 2020. Kohli was named
              the Wisden Leading Cricketer in the World for three consecutive
              years.
              <br />
              Kohli has the most Player of the Series and second most Player of
              the Match awards to his name in all three formats combined. He was
              honoured with the Arjuna Award in 2013, the Padma Shri in 2017,
              and India's highest sporting honour, the Khel Ratna Award, in
              2018. Time included him on its 100 most influential people in the
              world list in 2018. Kohli has been deemed one of the most
              commercially viable athletes, with estimated earnings of ₹634
              crore (US$66 million) in the year 2022.
              <br />
              After winning the 2024 T20 World Cup and winning the Player of the
              Match award in the final, Kohli announced his retirement from
              T20Is.[10] On 12 May 2025, aged 36, he announced his retirement
              from the Test format.[11] He is married to actress Anushka Sharma,
              and they have two children.[12]
              <br/>
            </div>
          </div>
        </div>
      </div>
      <button onClick={changeColor} id="color-1"className="btn btn primary">Change Color</button>
      </div>
    </>
  );
}
