import React from "react";
import { SectionHeader } from "../components/SectionHeader";
import "../App.css";

function Home() {
  return (
    <>
      <div className="cropped">
        <img src="https://live.staticflickr.com/65535/52541500898_de7feeef9e_k.jpg" style={{width: 250}}/>
        <div className="centered">
          <h1>Kayla and Colton's Wedding</h1>
          <h1>July 29th, 2023</h1>
          <h1>Stillwater, Minnesota</h1>
        </div>
      </div>

      <button>RSVP</button>

      <SectionHeader title="Details" id="details" />
      <div>Where?: Studio J Loft</div>
      <div>When?: July 29th, 2023 at 4pm</div>
      <div>Cocktail hour, dinner, and reception to follow</div>
      <div>Parking: Details to come</div>
      <div>Hotels: Details to come</div>
      <div>Dress: Details to come</div>

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
        Ashley Kuhlman - Maid of Honor (Sister) Hannah Kuhlman - Bridesmaid
        (Sister) Alex Larrabee - Bridesmaid (Friend) Serena Beurmann -
        Bridesmaid (Friend) Taylor Baker - Bridesmaid (Cousin)  Erik Walker -
        Best Man (Friend) Cheston Otterness - Groomsman (Brother) Chris ? -
        Groomsman (Friend) Lee Beurmann - Groomsman (Friend) Will Larson -
        Groomsman (Cousin) Jolyne Peterson - Flower Grandma (Grandmother)  
        Nancy Peterson - Personal Attendent (Aunt) Debbie Peterson - Ceremony
        Reader (Aunt) Brooke Littleton - Usher (Cousin) ?????? Dane Littleton -
        Usher (Cousin) ?????? Dylan Peterson - Usher (Cousin) ?????? Ty Peterson
        - Usher (Cousin) ???????   
      </div>
    </>
  );
}

export default Home;
