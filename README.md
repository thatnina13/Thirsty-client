
# Thirsty: an app to help track embedded water consumption
### Planning Story and overall Scope
I live with a man who is constantly popping the bubble of blissful ignorance in
which I live. At any given moment, during any part of our conversation, he will
deliver a devastating dose of reality which reminds me how lucky I am- how
circumstance has blessed me and how so many other people are significantly less
lucky. I find him annoying, but only because becoming a better person is a
painful, uncomfortable and often guilt ridden process.

That said, not all of his reality checks sink in- after all, I’m am only a human
woman and I can only take on so much emotional upheaval. For this reason,
coupled with my lack of understanding, I flat out ignored his comments about red
meat production and “the water that goes into a hamburger.” It wasn’t until my
mom had a health scare and took on a plant based diet in order to reduce the
amount of fat in her blood that I started learning about the water we eat. Two
things became immediately obvious: first, I am a clueless boob and second: there
is a very real lack of information provided to consumers about the water
footprints of the products they buy and eat. Thirsty is, as I’ve dreamed it, a
tool built for the clueless boobs of the world. I’m not suggesting we all must
become vegans or give up coffee. Nor am I claiming to have cracked the water
problem or to even have good sustainable habits myself. Case in point: I took
three showers yesterday :information_desk_person:. The third was completely unneeded and functioned purley
as a safe place for me to have a good old fashioned 3 am- I-can’t-fix-this-friggin-
user-facing-bug cry. Instead, I hope that with easier access to important and
meaningful information, more people will have more opportunities to make more
sustainable choices.

The following SPA is a web is version one of my long term goal to build a mobile
application which will allow a user to access the water footprint of a product
while they are shopping and to track their personal embedded waterprint. Initial
iterations will tackle grocery items including produce and animal products. Later
versions will include apparel and household goods like paper towel and plastics.
Ideally, a user will be able to scan the barcode of an item, using their smartphone,
and be shown the embedded waterfoot footprint of that item across Green, Blue
and Grey water types. The user will be able to set goals for their personal water
footprint against their nations avg. The user will be able to log products they
have consumed that day and see a days total water consumption.  Finally the user
will be able to track their water consumption over a period of time.

Of course, many of these features are far far from where Thirsty stands today.
Version one is a simple CRUD SPA web app which will allow a user to create,
update, read and destroy a resource or, entry.

##### Here are some super fun stats to start us off:
- One egg- thats right, a SIGNLE EGG requires 53 gallons of water to produce
- One gallon of milk requires 880 gallons of water
- A single 1/3-pound burger :cow2: requires 660 gallons of water :droplet:

- And the real kick in the teeth: It takes 450 gallons of water to make one 3.5-ounce (100-gram) chocolate bar
Sweet baby ray- how many rivers have run dry as the hands of my 30 years of Halloween candy???

### Process and Planning:
Starting this project, I had a very clear vision for the end product. However,
as previously discussed- my end goal for this project is at the very least
several versions away. In order to meet requirements for this project, I needed
to walk back the end goal and compartimentalize a MVP. Following a number of
excursions into public data sets and a number of google searches for things like
"how UPC codes work" I was able to build out a bare bones MVP with CRUD actions
for a specific entry- which will act as the basis for a user to log a product
in the future.

### User Stories:
Current Version
As an unregistered user, I would like to sign up with email and password.
As a registered user, I would like to sign in with email and password.
As a signed in user, I would like to change password.
As a signed in user, I would like to sign out.
As a signed in user I would like create an entry
As a signed in user I would like see all my entries
As a signed in user I would like update my entries
As a signed in user I would like delete an entry I own

Future Versions
- As a signed in user I would like to create a profile, by answering a number of
questions which would create my average water footprint
- As a signed in user I would like to be able to log the products I eat and to see
their waterfootpring
- As a signed in user I would like to be able to view a graph detailing my water
consumption over the course of a month - I would be able to see my reduction overtime (ideally)
- AS a Signed in user I would like to be able to scan a product's barcode and see their water footprint
- As a signed in user I would like to see a list of times to avoid

### Important Links

- [API Repo](https://github.com/thatnina13/Thirsty)
- [Deployed API](https://pure-caverns-85190.herokuapp.com/)
- [Deployed Client](https://thatnina13.github.io/Thirsty-client/)

#### Wireframe:
![wireframe](https://docs.google.com/presentation/d/1W2SffZHU_GG4XdcJ4dphnCWOizSKQjVb7BDzF8hvg1U/edit?usp=sharing)


#### ERD:
![ERD](https://i.imgur.com/ycvIfVA.png)

#### Technologies used:
- Ruby
- Rails
- Express
- Bootstap
- CSS
- HandleBars
