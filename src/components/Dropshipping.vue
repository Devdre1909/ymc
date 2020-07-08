<template>
  <div>
    <mdb-navbar expand="large" dark color="indigo">
      <mdb-navbar-brand href="#">Toluwanimi Daniel</mdb-navbar-brand>
    </mdb-navbar>
    <!-- Header -->
    <mdb-jumbotron
      id="top"
      class="mb-0 justify-content-start align-items-center row"
      style="background-color: #F7F7F7; margin: auto; width: 98%"
    >
      <div class="col-md-6 col-12">
        <h2 style="color: #141954" class="h1 text-uppercase">{{title}}</h2>
        <p class="my-4 font-weight-bold">UPDATED Tuesday, 7th July 2020</p>
        <mdb-row class="d-flex">
          <mdb-col class="pb-2">
            <p class="card-text">
              If you don't like to read too much, just scroll down to the
              <a href="#video">video</a>, watch it, check the
              <a href="#features">features</a> and
              <a href="#bonus">massive bonuses</a> I've prepared for you.
              <br />
              <br />Hit the GET ACCESS NOW button and check out massive massive testimonies from from dropshiply users and MAKE SURE YOU READ THE
              <a
                href="#important"
              >IMPORTANCE NOTICE</a> BEFORE PROCEEDING.
            </p>
          </mdb-col>
        </mdb-row>
        <mdb-btn class="text-center mx-0 mr-2 my-3" color="orange" icon="cart-plus" iconRight>
          <a :href="url" target="_blank" rel="noopener noreferrer">Get Access Now</a>
        </mdb-btn>
      </div>
      <div class="col-md-6 col-12">
        <img width="100%" src="../assets/images/dropship.jpeg" alt />
      </div>
    </mdb-jumbotron>
    <!-- Intro -->
    <div class="intro" style="background-color: #141954; padding: 4rem 3rem">
      <mdb-container class="my-3">
        <div class="text-justify text-white text-break" style="line-height: 1.7rem">
          <p
            style="color: #fff !important"
          >Hello Ecom enthusiasts, newbies, those of you who have come a long in trying to drive up sales, I am very happy for the opportunity to present to you the valueable method you have been looking for and want.</p>
          <p style="color: #fff !important">
            Now when it comes to running an insanely PROFITABLE dropshipping business, there is ONLY one thing that matters!
            It doesn’t matter how hard you work, how much time you put in or how much money you invest. It doesn’t matter how BADLY you want to be successful
            YOU will fail miserably like 98% of other ecom marketers if you don’t understand one secret!
          </p>
          <p
            style="color: #fff !important"
          >The problem is that most people spend hours and hours each day WASTING their time and money on Facebook ads that don’t work. If you’re anything like the masses, then you’re probably working with unreliable drop shippers, crappy products that no one really wants. Chances are, even when you can sell these products, you are UNHAPPY with the PATHETIC margins you receive.</p>

          <p
            style="border: 2px dotted rgba(255,255,255,0.6); padding: 1rem; color: white; box-shadow: 0 0 25px rgba(0,0,0,0.4);"
          >
            But what if YOU had INSTANT access to thousands of the world’s most reliable dropshippers right at your fingertips?
            Imagine how incredible you’d feel if you had immediate access to the HOTTEST selling products on Facebook.
            But what if these products were coming from multiple reliable dropshippers so YOU NEVER TOUCH ANY INVENTORY and YOU NEVER pay for a product until the customerhas already PAID you in full?
            Picture how INCREDIBLE you’d feel if you knew EXACTLY how to target the PERFECT buyers for these products on Facebook all using our 100% automated software!
          </p>

          <p style="color: white !important">
            Well, imagine no more because the most comprehensive dropship training and most powerful automated dropship ecommerce software has just been
            released, it's called
            <a
              :href="url"
              target="_blank"
              style="text-decoration: underline; font-weight: 700"
              rel="noopener noreferrer"
            >{{title}}</a>. You are getting a comprehensive training, access to successful dropshippers like you, then THE POWERFUL SOFTWARE.
          </p>
        </div>
        <mdb-btn class="d-block text-center mx-auto my-3" color="orange">
          <a :href="url" target="_blank" rel="noopener noreferrer">Get Access Now</a>
        </mdb-btn>
      </mdb-container>
    </div>
    <!-- Intro 2 -->
    <div style="background-color: #F7F7F7; padding: 4rem 3rem">
      <mdb-container class="my-3">
        <img width="38%" style="float: right" src="../assets/images/dropship.jpeg" alt />
        <p class="text-justify text-dark text-break" style="line-height: 1.7rem"></p>
        <p>Dropshiply is the most POWERFUL software app on the market that AUTOMATES 97% of your entire dropshipping business. It is a complete “full blown” ecommerce platform that will get you a complete dropshipping store in literally minutes, with just few clicks of a mouse, you can start selling the HOTTEST products at the LOWEST prices WITHOUT ever touching any inventory or spending a single dime before the sale is made and YOU are paid in full i.e you don't pay for a product until your buyer has paid.</p>

        <p>Dropshiply’s FB ad targeting tool makes sure your targeting is always spot on - so every time you launch a campaign, it almost always will turn green.</p>

        <p>
          I know you don't like to spend too much time and money trying to build a business, you appreciate INSTANT done-for-you solutions. That's what dropshiply is here for. It does all the hardwork for you, just create and run your store by Literally just clicking a few buttons.
          You can connect your store or create one from complete scratch and run your business inside Dropshiply. This is the biggest level of automation.
          ...And best part? It doesn’t need Shopify, so no more monthly fees!
        </p>
        <p>This same system and strategies are what Devid’s students have personally used to make $2.6 Million with their eCom stores! This 7-step system will INSTANTLY reveal how to easily create your store, finding a hot niche, get immediate access to superb dropship products at up to 90% BELOW retail prices and profit INSANELY right from day 1!</p>
        <mdb-btn class="d-block text-center mx-auto my-3" color="orange">
          <a :href="url" target="_blank" rel="noopener noreferrer">Get Access Now</a>
        </mdb-btn>
      </mdb-container>
    </div>
    <!-- Video -->
    <div id="video" class="intro" style="background-color: #141954; padding: 4rem 3rem">
      <mdb-container class="my-3">
        <h3
          class="h3 text-white text-center"
        >This is one product you cannot afford to miss if you want to be successful in e-commerce. Check out its features.</h3>
        <div style="padding:56.25% 0 0 0;position:relative;">
          <iframe
            class="my-3"
            src="https://player.vimeo.com/video/386615238?title=0&byline=0&portrait=0"
            style="position:absolute;top:0;left:0;width:100%;height:100%;"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></iframe>
        </div>
        <p class="text-white mt-4">
          <a style="text-decoration: underline" href="https://vimeo.com/386615238">Dropshiply Demo</a> from
          <a href="https://vimeo.com/user55817191">Devid Farah</a> on
          <a href="https://vimeo.com">Vimeo</a>.
        </p>
        <h5 class="text-center my-2" style="color: white">WATCH THE DROPSHIPLY SOFTWARE IN ACTION</h5>
        <mdb-btn class="d-block text-center mx-auto my-3" color="orange">
          <a :href="url" target="_blank" rel="noopener noreferrer">Get Access Now</a>
        </mdb-btn>
      </mdb-container>
    </div>
    <!-- features -->
    <div id="features" style="background-color: #F7F7F7; padding: 4rem 3rem">
      <mdb-container class="my-3">
        <mdb-row>
          <mdb-col class="features text-center" sm="12" md="3" lg="4">
            <i class="fab fa-wordpress fa-2x mx-2"></i>
            <h4 class="title h4">WP Connect</h4>
            <p class="details">Automatically integrate Dropshiply fully with your existing WP stores</p>
          </mdb-col>
          <mdb-col class="features text-center" sm="12" md="3" lg="4">
            <i class="fas fa-store fa-2x mx-2"></i>
            <h4 class="title h4">Store Stats</h4>
            <p
              class="details"
            >Instantly see and manage all the data from your stores right here inside your dashboard</p>
          </mdb-col>
          <mdb-col class="features text-center" sm="12" md="3" lg="4">
            <i class="far fa-grin-stars fa-2x mx-2"></i>
            <h4 class="title h4">SEO Stats</h4>
            <p class="details">
              Get full SEO statistics.. title, meta description, domain authority, page authority, page rank, seo score, Alexa global rank,
              country rank &amp; more!
            </p>
          </mdb-col>
          <mdb-col class="features text-center" sm="12" md="3" lg="4">
            <i class="fa fa-search-plus fa-2x mx-2" aria-hidden="true"></i>
            <h4 class="title h4">Instant Domain Search</h4>
            <p
              class="details"
            >Don’t have a domain for your store? No problem! Dropshiply's instant domain generator will pick a domain for you in seconds!</p>
          </mdb-col>
          <mdb-col class="features text-center" sm="12" md="3" lg="4">
            <i class="fas fa-money-bill-alt fa-2x mx-2"></i>
            <h4 class="title h4">Niche Intelligence Technology</h4>
            <p class="details">Know which niches will GENERATE MONEY before creating your store!</p>
          </mdb-col>
          <mdb-col class="features text-center" sm="12" md="3" lg="4">
            <i class="fas fa-toolbox fa-2x mx-2"></i>
            <h4 class="title h4">Ali Express Spy Tool</h4>
            <p
              class="details"
            >The entire AliExpress platform has been integrated inside Dropshiply so you can find THOUSANDS of products that are impossible to even know exist without hours of laborious research!</p>
          </mdb-col>
          <mdb-col class="features text-center" sm="12" md="3" lg="4">
            <i class="fab fa-ebay fa-2x mx-2"></i>
            <h4 class="title h4">eBay Spy</h4>
            <p
              class="details"
            >Identify top eBay products and get product ideas from top competition so you can predict how sales will go!</p>
          </mdb-col>
          <mdb-col class="features text-center" sm="12" md="3" lg="4">
            <i class="far fa-toolbox fa-2x mx-2"></i>
            <h4 class="title h4">Walmart Product Finder</h4>
            <p
              class="details"
            >Uncover unlimited products on Walmart, you can sell on your store right away!</p>
          </mdb-col>
          <mdb-col class="features text-center" sm="12" md="3" lg="4">
            <i class="fas fa-toolbox fa-2x mx-2"></i>
            <h4 class="title h4">Alexa Spy</h4>
            <p
              class="details"
            >Discover traffic stats and global rankings of millions of websites and exploit untapped markets</p>
          </mdb-col>
          <mdb-col class="features text-center" sm="12" md="3" lg="4">
            <i class="fab fa-facebook-f fa-2x mx-2"></i>
            <h4 class="title h4">FB Interest Explorer</h4>
            <p
              class="details"
            >Uncover thousands of profitable interest keyword phrases for your FB ad campaigns</p>
          </mdb-col>
          <mdb-col class="features text-center" sm="12" md="3" lg="4">
            <i class="fas fa-edit fa-2x mx-2"></i>
            <h4 class="title h4">Built In-App Editor</h4>
            <p class="details">
              Don't like a particular element? No problem! Instantly edit product descriptions, title, price, tags, category, images, variants
              and more!
            </p>
          </mdb-col>
          <mdb-col class="features text-center" sm="12" md="3" lg="4">
            <i class="fas fa-cogs fa-2x mx-2"></i>
            <h4 class="title h4">1-Click Product Importer</h4>
            <p
              class="details"
            >Import hundreds of products to your store within minutes one single click!</p>
          </mdb-col>
          <mdb-col class="features text-center" sm="12" md="3" lg="4">
            <i class="fas fa-store-alt fa-2x mx-2"></i>
            <h4 class="title h4">Store Manager</h4>
            <p class="details">Manage all your products, orders and customers in one click!</p>
          </mdb-col>
          <mdb-col class="features text-center" sm="12" md="3" lg="4">
            <i class="fas fa-first-order fa-2x mx-2"></i>
            <h4 class="title h4">Manage Orders</h4>
            <p
              class="details"
            >View, edit, delete orders here! See all details.. product name, sku, quantity, price, billing and shipping info and more!</p>
          </mdb-col>
          <mdb-col class="features text-center" sm="12" md="3" lg="4">
            <i class="fas fa-product-hunt fa-2x mx-2"></i>
            <h4 class="title h4">Manage Products</h4>
            <p
              class="details"
            >The “Server Side Processing” technology lets you manage all your products at once!</p>
          </mdb-col>
          <mdb-col class="features text-center" sm="12" md="3" lg="4">
            <i class="fas fa-users-cog fa-2x mx-2"></i>
            <h4 class="title h4">Manage Customers</h4>
            <p
              class="details"
            >All customers are instantly tracked and displayed in Dropshiply. All new orders on your store will also automatically update here!</p>
          </mdb-col>
          <mdb-col class="features text-center" sm="12" md="3" lg="4">
            <i class="fas fa-list-alt fa-2x mx-2"></i>
            <h4 class="title h4">Manage Multiple Listings</h4>
            <p
              class="details"
            >Instantly publish a new listing, manage multiple listings or edit all existing listings.</p>
          </mdb-col>
          <mdb-col class="features text-center" sm="12" md="3" lg="4">
            <i class="fas fa-sync fa-2x mx-2"></i>
            <h4 class="title h4">Sync Orders</h4>
            <p
              class="details"
            >All orders in your stores will be automatically synced to Dropshiply in real-time!</p>
          </mdb-col>
          <mdb-col class="features text-center" sm="12" md="3" lg="4">
            <i class="fas fa-autoprefixer fa-2x mx-2"></i>
            <h4 class="title h4">Auto Order Technology</h4>
            <p class="details">Dropshiply places the order and fills out the address with one-click!</p>
          </mdb-col>
          <mdb-col class="features text-center" sm="12" md="3" lg="4">
            <i class="fas fa-watch fa-2x mx-2"></i>
            <h4 class="title h4">Product Watchdogs</h4>
            <p class="details">Watch for all the price changes and automatically update them.</p>
          </mdb-col>
          <mdb-col class="features text-center" sm="12" md="3" lg="4">
            <i class="fas fa-cogs fa-2x mx-2"></i>
            <h4 class="title h4">Inventory Watchdog</h4>
            <p
              class="details"
            >Keeps an eye on inventory changes and automatically restock products. You’ll never sell something your vendor ran out of!</p>
          </mdb-col>
          <mdb-col class="features text-center" sm="12" md="3" lg="4">
            <i class="fas fa-money-check fa-2x mx-2"></i>
            <h4 class="title h4">Inbuilt Pricing Margins</h4>
            <p
              class="details"
            >Create pricing rules so you can have consistent margins for all the products you sell!</p>
          </mdb-col>
          <mdb-col class="features text-center" sm="12" md="3" lg="4">
            <i class="fas fa-power-off fa-2x mx-2"></i>
            <p
              class="details"
            >Dropshiply fully integrates with WooCommerce so you can have all your products displayed in your dashboard.</p>
          </mdb-col>
          <mdb-col class="features text-center" sm="12" md="3" lg="4">
            <i class="fab fa-app-store fa-2x mx-2"></i>
            <h4 class="title h4">Inbuilt App Store</h4>
            <p
              class="details"
            >Dropshiply has a built in App Store where you can download our Free and Paid ecommerce apps to grow your business and improve your traffic, marketing and sales!</p>
          </mdb-col>
          <mdb-col class="features text-center" sm="12" md="3" lg="4">
            <i class="fab fa-themeco fa-2x mx-2"></i>
            <h4 class="title h4">Premium Themes</h4>
            <p
              class="details"
            >The Theme Store includes over 100 free and premium professionally designed ecommerce themes that you can use for your own store!</p>
          </mdb-col>
          <mdb-col class="features text-center" sm="12" md="3" lg="4">
            <i class="fas fa-spider-web fa-2x mx-2"></i>
            <h4 class="title h4">20+ Api Integration</h4>
            <p
              class="details"
            >Dropshiply easily integrates with 20+ apis to make your life and work easier and faster!</p>
          </mdb-col>
          <mdb-col class="features text-center" sm="12" md="3" lg="4">
            <i class="fas fa-envelope fa-2x mx-2"></i>
            <h4 class="title h4">Autoresponder and Email Integration</h4>
            <p
              class="details"
            >Dropshiply has direct integrations with Aweber, GetResponse, Mailchimp and Sendy. You can also integrate with any other app with our custom integrations</p>
          </mdb-col>
        </mdb-row>
        <mdb-btn class="d-block text-center mx-auto my-3" color="orange">
          <a :href="url" target="_blank" rel="noopener noreferrer">Get Access Now</a>
        </mdb-btn>
      </mdb-container>
    </div>
    <!-- important -->
    <mdb-container
      id="important"
      class="intro"
      style="background-color: #fff; padding: 4rem 3rem; border-radius: 25px 25px 0 0; box-shadow: 0 0 25px rgba(0,0,0,0.1)"
    >
      <mdb-container class="my-3">
        <h3 class="h3 red text-center">IMPORTANT NOTICE</h3>
        <p style="color: #333; font-size: 16px">
          The original price of DROPSHIPLY is $197, but Devid Farah is giving a special price throughout this launch. The Price will be increasing as the launch progresses, so you really want to purchase during the first 7hours of the Launch for $36(pro), $31.95(lite), with the $3 coupon code "dropshiply3off".
          After the first 7 hours, the price will be $37, with a $2 coupon code (Devid Farah will give you the coupon code on his sales page) .
          The launch starts July 8, 10AM EST.
          <br />If you're seeing this after the $3 and $2 coupon expires, don't worry the price is still very discounted, but after the launch the price is going to SPIKE BACK UP, so purchase now!
          You don't want to wish you've gotten the product after the price has been raised high.
        </p>
        <mdb-btn class="d-block text-center mx-auto my-3" color="orange">
          <a :href="url" target="_blank" rel="noopener noreferrer">Get Access Now</a>
        </mdb-btn>
      </mdb-container>
    </mdb-container>
    <!-- bonus -->
    <div id="bonus" style="background-color: #F7F7F7; padding: 4rem 3rem">
      <mdb-container class="my-3 text-center">
        <h2 class="red">I HAVE PACKED MASSIVE BONUSES FOR YOU, TO MAKE YOUR E-COMMERCE EASY</h2>
        <h4>These bonuses are great tools and aids you'll be very grateful that you got.</h4>
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
          <mdb-col md="3" sm="6">
            <img
              height="175px"
              class="rounded d-block mx-auto py-2"
              src="../assets/images/WhatsApp Image 2020-07-03 at 9.27.00 PM.jpeg"
              alt
            />
          </mdb-col>
          <mdb-col md="3" sm="6">
            <img
              height="175px"
              class="rounded d-block mx-auto py-2"
              src="../assets/images/WhatsApp Image 2020-07-03 at 9.46.32 PM.jpeg"
              alt
            />
          </mdb-col>
          <mdb-col md="3" sm="6">
            <img
              height="175px"
              class="rounded d-block mx-auto py-2"
              src="../assets/images/WhatsApp Image 2020-07-03 at 9.46.32 PM (1).jpeg"
              alt
            />
          </mdb-col>
          <mdb-col md="3" sm="6">
            <img
              height="175px"
              class="rounded d-block mx-auto py-2"
              src="../assets/images/WhatsApp Image 2020-07-03 at 9.46.33 PM.jpeg"
              alt
            />
          </mdb-col>
          <mdb-col md="3" sm="6">
            <img
              height="175px"
              class="rounded d-block mx-auto py-2"
              src="../assets/images/WhatsApp Image 2020-07-03 at 9.46.33 PM (2).jpeg"
              alt
            />
          </mdb-col>
          <mdb-col md="3" sm="6">
            <img
              height="175px"
              class="rounded d-block mx-auto py-2"
              src="../assets/images/WhatsApp Image 2020-07-03 at 9.56.14 PM.jpeg"
              alt
            />
          </mdb-col>
          <mdb-col md="3" sm="6">
            <img
              height="175px"
              class="rounded d-block mx-auto py-2"
              src="../assets/images/WhatsApp Image 2020-07-04 at 10.13.20 AM.jpeg"
              alt
            />
          </mdb-col>
          <mdb-col md="3" sm="6">
            <img
              height="175px"
              class="rounded d-block mx-auto py-2"
              src="../assets/images/cover.jpg"
              alt
            />
          </mdb-col>
          <mdb-col md="3" sm="6">
            <img
              height="175px"
              class="rounded d-block mx-auto py-2"
              src="../assets/images/cover (1).jpg"
              alt
            />
          </mdb-col>
        </mdb-row>
        <mdb-btn class="d-block text-center mx-auto my-3" color="orange">
          <a :href="url" target="_blank" rel="noopener noreferrer">Get Access Now</a>
        </mdb-btn>
      </mdb-container>
    </div>
    <!-- Footer -->
    <mdb-footer fluid color="black" class="font-small pt-4 mt-4">
      <div class="footer-copyright text-center py-3">
        <mdb-container fluid>&copy; {{new Date().getFullYear()}} Copyright: Toluwanimi</mdb-container>
      </div>
    </mdb-footer>
    <!-- Footer -->
  </div>
</template>

<script>
import {
  mdbFooter,
  mdbJumbotron,
  mdbRow,
  mdbCol,
  mdbBtn,
  mdbContainer,
  mdbNavbar,
  mdbNavbarBrand
} from "mdbvue";

export default {
  mounted() {
    let vimeo = document.createElement("script");
    vimeo.setAttribute("src", "https://player.vimeo.com/api/player.js");
    document.head.appendChild(vimeo);
  },
  data() {
    return {
      url: "https://jvz6.com/c/1613019/347359",
      title: "DROPSHIPLY"
    };
  },
  components: {
    mdbFooter,
    mdbNavbar,
    mdbNavbarBrand,
    mdbContainer,
    mdbJumbotron,
    mdbCol,
    mdbRow,
    mdbBtn
  }
};
</script>

<style scoped>
p {
  color: #353535;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  line-height: 1.6rem;
}

a {
  color: #141954;
  font-weight: bold;
}

button[data-toggle] {
  opacity: 0;
}

button {
  background-color: #e17304;
}

button > a {
  color: white;
}

.intro a {
  color: white !important;
  font-weight: 400;
}

.text-dark li {
  list-style-type: circle;
}

ul {
  font-size: 0.9rem;
  list-style-type: none;
  padding-inline-start: 0;
}

.text-dark li {
  color: #222;
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

.red {
  color: red;
  background-color: transparent !important;
}

.features {
  padding: 1rem;
}

.features:hover {
  padding: 1rem;
}

.features i {
  color: #e17304;
  margin-bottom: 1rem;
}

.features .title {
  font-size: 16px;
}

.features .details {
  font-size: 14px;
  width: 80%;
  margin: auto;
}
</style>
