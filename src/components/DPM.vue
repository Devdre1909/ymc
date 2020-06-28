<template>
    <div style="font-weight: 300">
        <mdb-navbar expand="large" dark color="indigo">
            <mdb-navbar-brand href="#">Toluwanimi Daniel</mdb-navbar-brand>
        </mdb-navbar>
        <mdb-jumbotron class="mb-0 text-center" style="background-image: url(../assets/images/blogpost.jpeg)">
            <h2 class="red h2 text-uppercase">{{title}}</h2>
            <p class="blue-text my-4 font-weight-bold">Get Early Access | {{new Date().toDateString()}}</p>
            <mdb-row class="d-flex justify-content-center">
                <mdb-col xl="7" class="pb-2">
                    <p class="card-text">
                        Hello friend, how are you? I trust that you're staying safe. Today i'm reviewing a product
                        called
                        <a :href="url" target="_blank" rel="noopener noreferrer">{{title}}</a>.
                    </p>
                </mdb-col>
            </mdb-row>
            <hr class="my-4 divider-new" />
            <mdb-btn class="text-center mx-auto my-3" color="orange" icon="gem" iconRight>
                <a :href="url" target="_blank" rel="noopener noreferrer">Purchase Now</a>
            </mdb-btn>
        </mdb-jumbotron>
        <div class="intro" style="background-color: #1976D2; padding: 4rem 3rem">
            <mdb-container class="my-3">
                <p class="text-justify text-white text-break" style="line-height: 1.7rem">
                    Hello guys, I trust you guys are staying safe?
                    <br />A pandemic hit the world early this year and put businesses to halt but over the past few
                    weeks, we have seen businesses reopen, and not only did they reopen, more business owners are
                    working in the business everyday, answering the phone, meeting customers and clients and they are
                    actively looking for ways to rebuild fast, and they are look for someone (you) to help them navigate
                    through the choppy waters.
                    <br />With the way things have been due to the lock-downs over the past few months, being able to
                    generate a new stream of income right now is a good thing…
                    ...especially if you’re able to offer an in-demand service that local businesses need that actually
                    helps them out.
                    <br />How would you like to make $300 anytime you want without any hard work or effort required?
                    <br />Tom Gaddis and Nick Ponte just released a brand new system for getting local leads for free
                    and quickly turning those leads into $300 payments almost instantly.
                    It's called
                    <a :href="url" target="_blank" rel="noopener noreferrer">{{title}}</a>, and inside you get access to
                    software, training, and a simple service that businesses need and want right now.
                </p>
                <mdb-btn class="d-block text-center mx-auto my-3" color="orange">
                    <a :href="url" target="_blank" rel="noopener noreferrer">Purchase your product here</a>
                </mdb-btn>
            </mdb-container>
        </div>
        <div style="padding: 5rem 1rem">
            <mdb-container>
                <mdb-row>
                    <!-- <mdb-col sm="12" md="4">
            <img
              src="../assets/images/blogpost.jpeg"
              class="img-fluid rounded mx-auto d-block my-4"
              alt="course"
              width="450px"
            />
          </mdb-col>-->
                    <mdb-col class="text-dark" sm="12" md="12">
                        <p class="p-3 text-black text-justify" style="line-height: 1.7rem">
                            This is what is great about about The <a :href="url" target="_blank"
                                rel="noopener noreferrer">{{title}}</a> and why you need to take a look at it…
                            <ul>
                                <li>There’s no cold-calling or door knocking</li>
                                <li>You get access to lead-finding software that will get you got leads for free with a
                                    few clicks of your mouse</li>
                                <li>You don’t have to send anything in the mail to get clients with this</li>
                                <li>You don’t have to send a bunch of emails, bug your friends and family, or trick
                                    anyone</li>
                                <li>This method works perfectly RIGHT NOW, but this is something you can permanently
                                    adopt that will make you money hand over fist for months and even years to come</li>
                                <li>You don’t have to spend a lot of time doing this</li>
                                <li>You’ll be able to bank $300 on demand and quickly scale-up to $10k per month or even
                                    $20k per month an beyond because this is something that local businesses actually
                                    need and it’s really easy to sell</li>

                            </ul>

                            <strong>(The price goes up tonight at midnight EDT)</strong>
                            
                        </p>
                    </mdb-col>
                </mdb-row>
            </mdb-container>
        </div>
        <div style="background-color: #333; padding: 4rem 1rem" class="text-white">
            <mdb-container class="p-4">
                <h3 class="text-left text-capitalize mb-2">THIS IS WHAT YOU’LL BE LEARNING IN THE TRAINING</h3>
                <hr class="mb-5" />
                <mdb-row>
                    <mdb-col md="6" sm="12">
                        <mdb-card style="background-color: transparent">
                            <mdb-card-body>
                                <mdb-card-title style="font-size: 1rem">Modules One</mdb-card-title>
                                <mdb-card-title>Why This Strategy Works</mdb-card-title>
                                <mdb-card-text>
                                    <ul>
                                        <li>Why Businesses Need Our Help Now</li>
                                        <li>The Biggest Opportunity This Year</li>
                                        <li>Perfect Reputation Strategy</li>
                                        <li>Add Rocket Fuel to Your Income</li>
                                    </ul>
                                </mdb-card-text>
                            </mdb-card-body>
                        </mdb-card>
                    </mdb-col>
                    <mdb-col md="6" sm="12">
                        <mdb-card style="background-color: transparent">
                            <mdb-card-body>
                                <mdb-card-title style="font-size: 1rem">Modules Two</mdb-card-title>
                                <mdb-card-title>What to Sell for Maximum Money</mdb-card-title>
                                <mdb-card-text>
                                    <ul>
                                        <li>$10,000 Authority & Credibility Builder</li>
                                        <li>Start Selling These Lucrative Services</li>
                                        <li>Simple Directory Setup Services</li>
                                        <li>Easy Review Optimization Services</li>
                                        <li>Profitable Citation Services</li>
                                        <li>Reputation Building Services</li>
                                        <li>Hot NEW Easy $300 Recurring Service</li>
                                    </ul>
                                </mdb-card-text>
                            </mdb-card-body>
                        </mdb-card>
                    </mdb-col>
                    <mdb-col md="6" sm="12">
                        <mdb-card style="background-color: transparent">
                            <mdb-card-body>
                                <mdb-card-title style="font-size: 1rem">Modules Three</mdb-card-title>
                                <mdb-card-title>How to Use Lead Finder Software</mdb-card-title>
                                <mdb-card-text>
                                    <ul>
                                        <li>Installation</li>
                                        <li>Dashboard Overview</li>
                                        <li>Finding Leads Fast</li>
                                        <li>The Right Services for the Right Leads</li>
                                        <li>Triple Your Success With ONE Click</li>
                                        <li>Exporting Leads Conversion Strategy</li>
                                    </ul>
                                </mdb-card-text>
                            </mdb-card-body>
                        </mdb-card>
                    </mdb-col>
                    <mdb-col md="6" sm="12">
                        <mdb-card style="background-color: transparent">
                            <mdb-card-body>
                                <mdb-card-title style="font-size: 1rem">Modules Four</mdb-card-title>
                                <mdb-card-title>Prospecting for Fast Profits</mdb-card-title>
                                <mdb-card-text>
                                    <ul>
                                        <li>How to Find the Perfect Prospect For Your Services</li>
                                        <li>Free Offer vs. Paid Offer</li>
                                        <li>Rocket Your Prospecting With Email Marketing</li>
                                        <li>Secret Message Method</li>
                                        <li>Patron Swap Method</li>
                                    </ul>
                                </mdb-card-text>
                            </mdb-card-body>
                        </mdb-card>
                    </mdb-col>
                    <mdb-col md="6" sm="12">
                        <mdb-card style="background-color: transparent">
                            <mdb-card-body>
                                <mdb-card-title style="font-size: 1rem">Bonus</mdb-card-title>
                                <p class="text-white">Our process map lays everything out step-by-step so you'll always know what to do next!</p>
                                <p class="text-white">There are many more bonuses to get, great tools to make your marketing easier and more valuable, you'll be glad u purchased.</p>
                                <!-- <mdb-card-title>Plus I’ve Got Some GREAT Bonus Content For You Too</mdb-card-title> -->
                                <mdb-card-text>
                                    <!-- <ul>
                                        <li>Keyword Research Mastery</li>
                                        <li>Interactive YT Channel Creation Checklist</li>
                                        <li>Youtube Ranking Myths Exposed</li>
                                        <li>Social Media Video Specs Infographic</li>
                                    </ul> -->
                                </mdb-card-text> 
                            </mdb-card-body>
                        </mdb-card>
                    </mdb-col>
                </mdb-row>
                <mdb-btn class="d-block text-center mx-auto my-3" color="orange">
                    <a :href="url" target="_blank" rel="noopener noreferrer">Purchase your product here</a>
                </mdb-btn>
                <p class="text-white text-justify" style="line-height: 1.7rem">P.S. - This isn’t just some ‘good idea turned into a product.’ Tom and Nick have tested this and are currently using this to make thousands of dollars per week.

If you’re serious about turning crisis into opportunity and making 2020 your best year ever you owe it to yourself to take a look at this right now…</p>
            </mdb-container>
        </div>
        <div style="padding: 4rem 4rem">
            <mdb-container>
                <h2 class="mt-3 red">I HAVE GOT THESE GREAT BONUSES FOR YOU WENT PURCHASE YOUR PRODUCT</h2>
                <mdb-row>
                    <mdb-col md="3" sm="6">
                        <img height="175px" class="rounded d-block mx-auto py-2"
                            src="../assets/images/3ee04468-dd18-460d-a64d-c55f3e95967a.jpeg" alt />
                    </mdb-col>
                    <mdb-col md="3" sm="6">
                        <img height="175px" class="rounded d-block mx-auto py-2"
                            src="../assets/images/5d3f4807-9a36-44af-a77a-d128fd6ccc65.jpeg" alt />
                    </mdb-col>
                    <mdb-col md="3" sm="6">
                        <img height="175px" class="rounded d-block mx-auto py-2"
                            src="../assets/images/41db52a6-7111-4d1b-8122-c87fe21b96be.jpeg" alt />
                    </mdb-col>
                    <mdb-col md="3" sm="6">
                        <img height="175px" class="rounded d-block mx-auto py-2"
                            src="../assets/images/1624f744-9c80-4df7-9602-3d19db94e48f.jpeg" alt />
                    </mdb-col>
                    <mdb-col md="3" sm="6">
                        <img height="175px" class="rounded d-block mx-auto py-2"
                            src="../assets/images/90578ecf-16e6-45e3-a084-d543bb4d7564.jpeg" alt />
                    </mdb-col>
                    <mdb-col md="3" sm="6">
                        <img height="175px" class="rounded d-block mx-auto py-2"
                            src="../assets/images/8978587d-9b8f-446d-be32-cb64b7f33dfc.jpeg" alt />
                    </mdb-col>
                    <mdb-col md="3" sm="6">
                        <img height="175px" class="rounded d-block mx-auto py-2"
                            src="../assets/images/c1782bd8-0036-4e7b-b68a-1687f632c6fc.jpeg" alt />
                    </mdb-col>
                    <mdb-col md="3" sm="6">
                        <img height="175px" class="rounded d-block mx-auto py-2"
                            src="../assets/images/d54f9818-457c-4e05-a14e-8e88d130ebcb.jpeg" alt />
                    </mdb-col>
                    <mdb-col md="3" sm="6">
                        <img height="175px" class="rounded d-block mx-auto py-2"
                            src="../assets/images/f9bef0c0-a700-4fbc-ac30-2e73eafb532d.jpeg" alt />
                    </mdb-col>
                </mdb-row>
                <h4 class="red">ARE YOU READY TO BUILD A BRAND AND CREATE INFLUENCE ON THE INTERNET?</h4>
                <h4 class="red">ORDER YOUR COPY OF <span class="text-uppercase">{{title}}</span> BELOW</h4>
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
                url: "https://warriorplus.com/o2/a/b9x3h/0",
                title: "Digital Profit Machine"
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
        font-size: 16px;
    }

    button[data-toggle] {
        opacity: 0;
    }

    button {
        background-color: orange !important;
    }

    button>a {
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

    .text-dark li{
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
</style>