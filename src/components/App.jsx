import React from "react";
import "/public/styles.css";
import Hcard from "./Hcard";
import Vcard from "./Vcard";

function App() {
  return (
    <div>
      <form action="" className="search-bar">
        <input
          id="search"
          type="search"
          name="search"
          pattern=".*\S.*"
          required
        />
        <button className="search-btn" type="submit">
          <span>Search</span>
        </button>
      </form>

      {/* <!-- horizontal --> */}

      <h4>Horizontal Flip</h4>
      <Hcard
        img="https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb"
        title=" Mountain"
        heading="Awesome"
        content="Write some thing about this thing"
      />
      <Hcard
        img="https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb"
        title="Lake"
        heading="Awesome"
        content="Write some thing about this thing"
      />
      <Hcard
        img="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb"
        title="Ocean"
        heading="Awesome"
        content="Write some thing about this thing"
      />
      <Hcard
        img="https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb"
        title="Waterfall"
        heading="Awesome"
        content="Write some thing about this thing"
      />

      <br />
      <br />

      {/* <!-- vertical --> */}

      <h4>Vertical Flip</h4>

      <Vcard
        img="https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb"
        title="FOREST"
        heading="Vertical"
        content="Same Component only Style different"
      />
      <Vcard
        img="https://images.pexels.com/photos/34950/pexels-photo.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb"
        title="TRACK"
        heading="Vertical"
        content="Same Component only Style different"
      />
      <Vcard
        img="https://images.pexels.com/photos/34546/sunset-lake-landscape-summer.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb"
        title="SWAMP"
        heading="Vertical"
        content="Same Component only Style different"
      />
      <Vcard
        img="https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb"
        title="FOREST"
        heading="Vertical"
        content="Same Component only Style different"
      />
    </div>
  );
}

export default App;
