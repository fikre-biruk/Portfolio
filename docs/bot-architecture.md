1. HeroScene — The World / Stage
Main question it answers:

"Where does everything exist?"

HeroScene is responsible for the 3D environment.

It does not care how the bot is built.

It controls:
🌍 Scene setup
Canvas
Camera
Lights
Background
Environment
Shadows
Post-processing (future)

Example responsibilities:

HeroScene

├── Camera
├── Lights
├── Floor
├── Particles
├── Bot
└── Rope
What HeroScene knows:

✅ "There is a bot in my scene"

It does NOT know:

❌ "The bot has a sphere head"
❌ "The bot has two cylinder arms"
❌ "The left arm is attached here"

Real-world analogy:

A movie director says:

"Put the robot character on this stage."

The director does not build the robot.

2. Bot — The Character Entity
Main question it answers:

"What is this character?"

Bot represents the actual character.

It is the entry point of the character system.

It controls:
Character state
Character behavior (future)
Character references
Animation connection

Future examples:

Bot states:

Idle
Thinking
Pulling Rope
Surprised
Happy
Bot knows:

✅ "I am a robot character"

It does NOT directly care about:

❌ Camera
❌ Lights
❌ Hero text
❌ Page layout

Example future:

The rope pulls the bot.

The rope does not say:

"Move Head, Body, Arm, Leg individually."

Instead:

Rope
 ↓
Bot
 ↓
Spine
 ↓
Whole character moves
Real-world analogy:

The actor.

The actor knows:

their role
their emotions
their actions

The actor doesn't know:

where the camera is
where the audience sits
3. Spine — The Character Builder
Main question it answers:

"How is this character visually assembled?"

Spine is the visual construction layer.

It takes pieces and creates one character.

Example:

Before Spine:

Head

Body

Left Arm

Right Arm

They are just separate objects.

Spine creates:

        Head

        Body
       /    \
    Arm      Arm
     |        |
   Leg      Leg
Spine controls:
Where parts attach
Relative positions
Character proportions

Example:

Head:
+ above body

Arms:
+ beside body

Legs:
+ below body
Spine does NOT control:

❌ animation behavior
❌ rope physics
❌ camera
❌ lighting

Real-world analogy:

The costume department.

They assemble:

helmet
body armor
arms
legs

into one recognizable character.

4. Spine — The Character Skeleton
Main question it answers:

"How does the character move as one system?"

Spine is the invisible structure.

You don't see it.

But everything depends on it.

Without Spine:

Head
Body
Arm
Leg

(each independent)

Problem:

If you move the body:

head stays
arms stay
legs stay

You have to manually move everything.

With Spine:

Spine

 ├── Head

 ├── Body
 │
 ├── Arms
 │
 └── Legs

Move Spine:

Everything follows.

Spine controls:

Future:

walking
leaning
pulling
jumping
rope reaction

Example:

Bot pulls rope:

Without Spine:

Move body
Move head
Rotate arms
Adjust legs
Fix positions

Messy.

With Spine:

Spine rotates backward

Everything follows naturally
Real-world analogy:

The skeleton inside a human body.

Your skin is not moving independently.

Your skeleton moves, and everything follows.

How they connect together

The complete flow:

page.tsx

    ↓

Hero

    ↓

HeroScene

    ↓

Bot

    ↓

Spine

    ↓

Spine

    ↓

Parts
A practical example: Your rope scene

Your future scene:

Bot pulls your name using rope.

What happens?

HeroScene

Creates:

camera
lights
rope
bot placement
Rope

Detects:

"The bot is pulling"

Bot

Receives:

"Pulling action"

Spine

Moves:

"Lean backward"

Spine

Keeps:

Head/body/arms/legs connected

Parts

Actually visually move:

head rotates
arms stretch
legs adjust
Simple rule to remember
System	Question
HeroScene	Where does everything exist?
Bot	What is the character?
Spine	How is the character assembled?
Spine	How does the character move?
Parts	What does the character look like?


The structure can become simple because in the current version we don't need Spine but later if i
think later have multiple visual versions of the bot (skins, damaged state, holiday theme, etc.), then Spine could still make sense.

But for now use this
page
└── Hero
    └── HeroScene
         └── Bot
              └── Spine
                   ├── Head
                   ├── Body
                   ├── LeftArm
                   ├── RightArm
                   ├── LeftLeg
                   └── RightLeg


About core folder
core/ is not a folder for visual components.
It is for shared infrastructure.

Think of it like this:

parts/      → visible things
core/       → invisible support systems

Examples of things that belong in core/:

shared constants
shared types
math helpers
animation helpers
configuration

Notice something:

None of those render anything.

