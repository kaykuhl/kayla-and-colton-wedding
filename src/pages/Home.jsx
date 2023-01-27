import React from "react";
import { SectionHeader } from "../components/SectionHeader";
import "../App.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'

function Home() {
  return (
    <div className="align-items-center justify-content-center text-center mt-5">
          <h1>Kayla and Colton's Wedding</h1>
          <h1>July 29th, 2023</h1>
          <h1>Stillwater, Minnesota</h1>



        <a href="https://forms.gle/qW8K83c9hS82iNSo8" target="_blank" rel="noreferrer">
          <Button variant="dark" size='lg' className='mt-2'>RSVP</Button>
        </a>

        <div style={{width:  '65%', margin: 'auto'}} className='mt-5'>

      <SectionHeader title="Details" id="details" />
      <div>Where?: Studio J Loft</div>
      <div>When?: July 29th, 2023 at 4pm</div>
      <div>Cocktail hour, dinner, and reception to follow</div>
      <div>Parking: Info on Downtown Stillwater Parking Ramp and free lots <a href='https://www.discoverstillwater.com/parking-ramp-free-lots/'>here</a></div>
      <div>Hotels: Due to the different budgets and needs for our guests, we are not doing a hotel block at a specific hotel. There are many options downtown Stillwater and a short drive away. <br/>
      Colton and Kayla will be staying at <a href='https://hotelcrosby.com/'>The Crosby</a>.<br/>
      <a href='https://www.discoverstillwater.com/lodging/hotels/'>Here</a> is a list of other hotels in the area.</div>
      <div>Dress: Semi-formal</div>

      <div>Map (THE LOFT):
      <img alt='stillwater map' src="https://www.one23events.com/uploads/7/5/0/5/75055219/published/parkingvenues.jpg?1648496042" style={{width: 250}}/>
      </div>

      <div>Staying for the weekend? Check out things to do in Stillwater: https://www.discoverstillwater.com/</div>

      <SectionHeader title="Registry" id="registry" />
      <div>
        We feel blessed enough that you're choosing to spend the day with us and
        we do not expect gifts from our wedding guests. If you wish to give a
        gift, we are registered at Amazon and REI. If a gift is hard to find
        consider funding for our Honeymoon in Norway in October 2023: link here
      </div>

      <SectionHeader title="Our Story" id="our-story" />

      <div>
        Kayla and Colton met in 2013 while attending their last years of
        college.
      </div>
      <div>
        Kayla knew Colton was the one when he sent her a pizza when she had a
        big Chemistry exam to study for.
      </div>
      <div>
        Kayla and Colton have traveled together and with family. To Denver,
        Arizona, Florida, Rome, Italy, Las Vegas, and the Carribean (we won’t
        talk about the time Colton sprained his ankle after the booze
        cruise....)
      </div>
      <div>
        They just purchased a house in Richfield, MN in december 2021 and are
        excited to continue making it their home.
      </div>
      <SectionHeader title="Wedding Party" id="wedding-party" />
      <div>
        Ashley Kuhlman - Maid of Honor (Sister of the Bride)<br/>
        Hannah Kuhlman - Bridesmaid (Sister of the Bride)<br/>
        Alex Larrabee - Bridesmaid (Friend)<br/>
        Serena Buermann - Bridesmaid(Friend)<br/>
        Taylor Baker - Bridesmaid (Cousin of the Bride)<br/>
        <br/>
        Erik Walker - Best Man (Friend)<br/> 
        Cheston Otterness - Groomsman (Brother of the groom)<br/> 
        Chris Halsted -Groomsman (Friend)<br/> 
        Lee Beurmann - Groomsman (Friend)<br/> 
        Will Larson - Groomsman (Cousin of the Bride)<br/> 
        <br/>
        Jolyne Peterson - Flower Grandma (Grandmother)<br/>
        Nancy Peterson - Personal Attendent (Aunt of the Bride)<br/> 
        Debbie Peterson - Ceremony Reader (Aunt of the Bride)<br/> 
        Brooke Littleton - Usher (Cousin of the Bride)<br/> 
        Dane Littleton - Usher (Cousin of the Bride)<br/> 
        Dylan Peterson - Usher (Cousin of the Bride)<br/> 
        Ty Peterson - Usher (Cousin of the Bride)<br/> 
      </div>
      </div>
    </div>
  );
}

export default Home;
