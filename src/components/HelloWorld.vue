<template>
  <div style="font-weight: 300">
    <mdb-navbar expand="large" dark color="indigo">
      <mdb-navbar-brand href="#">Toluwanimi Daniel</mdb-navbar-brand>
    </mdb-navbar>
    <mdb-jumbotron
      class="mb-0 text-center"
      style="background-image: url(../assets/images/blogpost.jpeg)"
    >
      <h2 class="red h2">{{title}}</h2>
      <p class="blue-text my-4 font-weight-bold">Get Early Access | {{new Date().toDateString()}}</p>
      <mdb-row class="d-flex justify-content-center">
        <mdb-col xl="7" class="pb-2">
          <p class="card-text">
            Hello friend, how are you? I trust that you're staying safe. Today i'm reviewing a product called
            <a
              :href="url"
              target="_blank"
              rel="noopener noreferrer"
            >{{title}}</a>.
          </p>
        </mdb-col>
      </mdb-row>
      <hr class="my-4" />
      <mdb-btn color="orange" icon="gem" iconRight>
        <a :href="url" target="_blank" rel="noopener noreferrer">Purchase Now</a>
      </mdb-btn>
    </mdb-jumbotron>
    <div class="intro" style="background-color: #1976D2; padding: 4rem 3rem">
      <mdb-container class="my-3">
        <p class="text-justify text-white text-break" style="line-height: 1.7rem">
          Hello friend, how are you? I trust that you're staying safe. Today i'm reviewing a product called
          <a
            :href="url"
            target="_blank"
            rel="noopener noreferrer"
          >{{title}}</a>. This is a product i believe in, the pandemic has kept us indoors for months and people are spending their time on youtube, views have increased by about 75%. It's the number 1 video platform in the world and (the second most viewed site in the world, with 33.54Billion visits
          <a
            href="https://www.similarweb.com/website/youtube.com#overview"
            target="_blank"
            rel="noopener noreferrer"
          >https://www.similarweb.com/website/youtube.com#overview</a>). Stop watching videos alone. Now is the time to create content, build your brand, increase your views on youtube and make sales, but You need to find a person who knows the business and knows how to help you reach your goals and that person is Adam Payne. He loves youtube and has been using it for 8 years. He's great at teaching and explaining his course, no surprise, because he was once a teacher. You really need to check out what Adam has to offer and give yourself a winning chance.
        </p>
        <mdb-btn class="d-block text-center mx-auto my-3" color="orange">
          <a :href="url" target="_blank" rel="noopener noreferrer">Purchase your product here</a>
        </mdb-btn>
      </mdb-container>
    </div>
    <div style="padding: 5rem 1rem">
      <mdb-container fluid>
        <mdb-row>
          <mdb-col sm="12" md="4">
            <img
              src="../assets/images/blogpost.jpeg"
              class="img-fluid rounded mx-auto d-block my-4"
              alt="course"
              width="450px"
            />
          </mdb-col>
          <mdb-col sm="12" md="8">
            <p class="p-3 text-black text-justify" style="line-height: 1.7rem">
              Youtube Channel Mastery reloaded
              <a
                :href="url"
                target="_blank"
                rel="noopener noreferrer"
              >{{title}}</a>. is a complete Youtube training course that contains everything you need to succeed on Youtube. It contains several modules with very detailed and instructional videos. You won't be needing another Youtube course again. The price for the
              <strong>Youtube Mastery Reloaded is $27 (earlybird)</strong>. The price will go up to $47 seven days from today, June 17.
            </p>
          </mdb-col>
        </mdb-row>
      </mdb-container>
    </div>
    <div style="background-color: #333; padding: 4rem 1rem" class="text-white">
      <mdb-container class="p-4">
        <h3 class="text-left text-capitalize mb-2">What you will learn</h3>
        <hr class="mb-5" />
        <mdb-row>
          <mdb-col md="6" sm="12">
            <mdb-card style="background-color: transparent">
              <mdb-card-body>
                <mdb-card-title style="font-size: 1rem">Modules One</mdb-card-title>
                <mdb-card-title>Choosing A Niche For Easy Profit (Topic)</mdb-card-title>
                <mdb-card-text>
                  <ul>
                    <li>How to uncover and validate profitable niches (What you'll learn)</li>
                    <li>How to create a brand that you can spread to all of social media</li>
                    <li>How to make sure you can get the .com domain for your brand too</li>
                    <li>How to come up with an endless supply of ‘profitable’ video ideas even before you start</li>
                  </ul>
                </mdb-card-text>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
          <mdb-col md="6" sm="12">
            <mdb-card style="background-color: transparent">
              <mdb-card-body>
                <mdb-card-title style="font-size: 1rem">Modules Two</mdb-card-title>
                <mdb-card-title>Creating & Optimizing Your Channel</mdb-card-title>
                <mdb-card-text>
                  <ul>
                    <li>What Youtube actually wants</li>
                    <li>How to gain instant authority with your channel viewers</li>
                    <li>The must-do’s when making your channel look pretty & professional</li>
                    <li>The basic and advanced settings you must optimize</li>
                  </ul>
                </mdb-card-text>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
          <mdb-col md="6" sm="12">
            <mdb-card style="background-color: transparent">
              <mdb-card-body>
                <mdb-card-title style="font-size: 1rem">Modules Three</mdb-card-title>
                <mdb-card-title>Amazing Analytics</mdb-card-title>
                <mdb-card-text>
                  <ul>
                    <li>Why you need to understand YouTube Analytics</li>
                    <li>How to use the data to grow</li>
                    <li>How to discover what your audience likes and dislikes</li>
                  </ul>
                </mdb-card-text>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
          <mdb-col md="6" sm="12">
            <mdb-card style="background-color: transparent">
              <mdb-card-body>
                <mdb-card-title style="font-size: 1rem">Modules Four</mdb-card-title>
                <mdb-card-title>Growing Your Channel</mdb-card-title>
                <mdb-card-text>
                  <ul>
                    <li>How to get more subscribers</li>
                    <li>How to make your videos appear everywhere instantly.</li>
                    <li>Scheduling Mastery so you get all your videos ready in advance</li>
                  </ul>
                </mdb-card-text>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
          <mdb-col md="6" sm="12">
            <mdb-card style="background-color: transparent">
              <mdb-card-body>
                <mdb-card-title style="font-size: 1rem">Bonus</mdb-card-title>
                <mdb-card-title>Plus I’ve Got Some GREAT Bonus Content For You Too</mdb-card-title>
                <mdb-card-text>
                  <ul>
                    <li>Keyword Research Mastery</li>
                    <li>Interactive YT Channel Creation Checklist</li>
                    <li>Youtube Ranking Myths Exposed</li>
                    <li>Social Media Video Specs Infographic</li>
                  </ul>
                </mdb-card-text>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
        </mdb-row>
        <mdb-btn class="d-block text-center mx-auto my-3" color="orange">
          <a :href="url" target="_blank" rel="noopener noreferrer">Purchase your product here</a>
        </mdb-btn>
        <p
          class="text-white text-justify"
          style="line-height: 1.7rem"
        >There are two upgrades to this frontend product. One of them is the PLAYLIST MASTERY. It covers everything from understanding how to silo playlists to optimizing them for traffic. Then there is the DISCOVERY MASTERY that teaches how to explode your growth with simple Youtube Discovery ads</p>
      </mdb-container>
    </div>
    <div style="padding: 4rem 4rem">
      <mdb-container>

        <h2 class="mt-3 red">I HAVE GOT THIS GREAT BONUS FOR YOU WENT PURCHASE YOUR PRODUCT</h2>
        <mdb-row>
          <mdb-col md="3" sm="6">
            <img
              height="175px"
              class="rounded d-block mx-auto py-2"
              src="../assets/images/3ee04468-dd18-460d-a64d-c55f3e95967a.jpeg"
              alt
            />
          </mdb-col>
          <mdb-col md="3" sm="6">
            <img
              height="175px"
              class="rounded d-block mx-auto py-2"
              src="../assets/images/5d3f4807-9a36-44af-a77a-d128fd6ccc65.jpeg"
              alt
            />
          </mdb-col>
          <mdb-col md="3" sm="6">
            <img
              height="175px"
              class="rounded d-block mx-auto py-2"
              src="../assets/images/41db52a6-7111-4d1b-8122-c87fe21b96be.jpeg"
              alt
            />
          </mdb-col>
          <mdb-col md="3" sm="6">
            <img
              height="175px"
              class="rounded d-block mx-auto py-2"
              src="../assets/images/1624f744-9c80-4df7-9602-3d19db94e48f.jpeg"
              alt
            />
          </mdb-col>
          <mdb-col md="3" sm="6">
            <img
              height="175px"
              class="rounded d-block mx-auto py-2"
              src="../assets/images/90578ecf-16e6-45e3-a084-d543bb4d7564.jpeg"
              alt
            />
          </mdb-col>
          <mdb-col md="3" sm="6">
            <img
              height="175px"
              class="rounded d-block mx-auto py-2"
              src="../assets/images/8978587d-9b8f-446d-be32-cb64b7f33dfc.jpeg"
              alt
            />
          </mdb-col>
          <mdb-col md="3" sm="6">
            <img
              height="175px"
              class="rounded d-block mx-auto py-2"
              src="../assets/images/c1782bd8-0036-4e7b-b68a-1687f632c6fc.jpeg"
              alt
            />
          </mdb-col>
          <mdb-col md="3" sm="6">
            <img
              height="175px"
              class="rounded d-block mx-auto py-2"
              src="../assets/images/d54f9818-457c-4e05-a14e-8e88d130ebcb.jpeg"
              alt
            />
          </mdb-col>
          <mdb-col md="3" sm="6">
            <img
              height="175px"
              class="rounded d-block mx-auto py-2"
              src="../assets/images/f9bef0c0-a700-4fbc-ac30-2e73eafb532d.jpeg"
              alt
            />
          </mdb-col>
        </mdb-row>
        <h4 class="red">ARE YOU READY TO BUILD A BRAND AND CREATE INFLUENCE ON THE INTERNET?</h4>
        <h4 class="red">ORDER YOUR COPY OF YOUTUBE CHANNEL MASTERY BELOW</h4>
        <mdb-btn class="d-block text-center mx-auto my-3" color="orange">
          <a :href="url" target="_blank" rel="noopener noreferrer">Purchase your product here</a>
        </mdb-btn>
      </mdb-container>
    </div>
  </div>
</template>

<script>
import {
  mdbJumbotron,
  mdbRow,
  mdbCol,
  mdbBtn,
  mdbContainer,
  mdbNavbar,
  mdbNavbarBrand,
  mdbCard,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText
} from "mdbvue";
export default {
  name: "HelloWorld",
  data() {
    return {
      url: "https://paykstrt.com/18520/58450",
      title: "YOUTUBE MASTERY RELOADED REVIEW"
    };
  },
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbContainer,
    mdbJumbotron,
    mdbCol,
    mdbRow,
    mdbBtn,
    mdbCard,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
p {
  color: #353535;
  margin-bottom: 0;
  font-size: 14px;
}
button[data-toggle]{
  opacity: 0;
}
button{
  background-color: orange !important;
}
button > a {
  color: white;
}
.intro a {
  color: white !important;
  font-weight: 400;
}
ul {
  font-size: 0.9rem;
  list-style-type: none;
  padding-inline-start: 0;
}
li {
  margin: 5px 0;
  color: rgba(255, 255, 255, 0.8);
}
.card-title {
  font-size: 1.2rem;
}
.card {
  margin: 0.5rem 0;
}
.red{
  color: red;
  background-color: transparent !important;
}
</style>

