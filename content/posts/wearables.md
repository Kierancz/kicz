---
title: Wearable Computing and Parkinson's FOG Assistant
description: A how to guide
date: 2015-05-07
layout: Post
---

![power modules](https://cdn.instructables.com/FUK/CTU1/I9CLX032/FUKCTU1I9CLX032.MEDIUM.jpg)

<iframe width="560" height="315" src="https://www.youtube.com/embed/Pmr8eylvb8s?rel=0" frameborder="0" allowfullscreen></iframe>

Many useful applications for the cheap processing power and sensors we have today are limited by the short duration of use provided by our batteries. To solve this, slim LiPo battery modules were made that attach to a user’s belt with a simple clip on the back. Each module contains a LiPo cell, LiPo protection circuit (PCM), and magnetic power terminals to allow them to be easily snapped into chains to provide more power. These power modules are linked in parallel to a control module that contains a step-up regulator with integrated USB to allow it to charge a phone or other devices, power terminals for powering loads with non-standard connections, an internal LiPo charger with micro-USB connection for convenient charging individually or as a chain.

As a demonstration of the possibilities these modules open up, we decided to focus on creating a wearable device that enables people diagnosed with Parkinson’s disease (PD) to escape Freeze of Gait (FoG) moments and improve their mobility and independence. To do this, a gyroscope constantly monitors a patient’s motion to identify an incidence of slowed or frozen gait. In the case of a freeze, a laser diode with a line projection lens shines a laser-line in front of a user so that they have a visual cue to step forward, replacing the cueing function of a PD patient’s impaired Basal ganglia. Similar techniques have successfully been used to reduce FoG moments and improve walking velocity.

# Step 1: Materials and Tools

Power Module Parts:

- 10x10x2mm Magnets

These strong neodymium magnets were used to allow the modules to easily snap together in parallel.

- 3.7v LiPo Battery Packs

We used these 4S LiPo packs from Turnigy because they were the right dimensions for the job, cost-effective per cell, high performance, and can be easy broken apart into four 3.7v cells with 850mah each.

- 5V Boost Switching Linear Regulator w/ USB

1A output Boosting DC-DC converter from ebay to boost up the batteries from an average voltage of 3.7V to 5V to drive the Arduino or charge a phone.

- LiPo Charger

These LiPo chargers are perfect for conveniently charging the 3.7v cells with up to 1A current from supported USB ports.

- LiPo PCMs

Pretty much any PCM designed for 3.7v LiPos will work, but you want to make sure that they have over-charge (OC), over-discharge (OD), and short circuit (SC) protection. We used these modules from ebay.

- Copper tape for wiring to magnets

These were found locally from a hardware store with a diverse inventory called McGuckins. Unfortunately Home Depot does not carry the right kind of copper tape.

- Adhesive

Gorilla glue epoxy is pretty great.

-Screws 3.6mm Length x 2.2mm Diameter

We also found these locally, unfortunately Home Depot is unlikely to carry screws this small.

Gait Module Parts:

Minimum parts:

- Arduino Pro Mini/Micro

We used an Arduino Pro Micro from Sparkfun.

- Accelerometer/Gyroscope MPU 6050

- Laser diode with a lens that projects a line

These laser diodes with a lens to focus the beam into a line were also found on ebay.

- A mini-breadboard for easy connections to the Arduino.

We found 5 of these little cuties on eBay.

Belt or Waist attachment Parts:

- These modules can use either an elastic or adjustable strap as well as metal clips so that they can be attached to the waist without a belt. We used these bail making pliers to bend 3003 aluminum strips into clips for the modules.

Parts for improvements:

- Through-hole potentiometer for gait-detection sensitivity adjustment.

- Through-hole RGB LED for feedback.

- Buzzer motor or solenoid for haptic feedback and gait-pace setting.

Other Tools:

- Multimeter for testing

- Soldering iron and helping hands (clips for holding parts)

- Small phillips screw driver

- Millimeter precision measuring calipers were very useful for this project, but not necessary if you plan to use all of our designs and parts.

![circuit diagram](https://cdn.instructables.com/FE7/87VN/I96W83CS/FE787VNI96W83CS.MEDIUM.jpg?width=614)

![visual circuit connections](https://cdn.instructables.com/F5R/I8A3/I96W8E89/F5RI8A3I96W8E89.MEDIUM.jpg)
# Step 2: Build Breadboard Circuit

This schematic shows how to connect the MPU 6050 gyroscope + accelerometer, the laser diode with focus line, and the Arduino pro mini. If you are using a different micro-controller, check which pins your board uses for the I2C pins; they can vary significantly between Arduino models.


![Roll pitch and yaw diagram](https://cdn.instructables.com/F2N/EH5G/I9EP24V0/F2NEH5GI9EP24V0.MEDIUM.jpg?width=614)
# Step 3: Understanding the Gyroscope

We began by downloading a preexisting library for the MPU 6050(gyroscope/potentiometer). We downloaded the library called MPU6050_DMP6 found on the following tutorial:

http://diyhacking.com/arduino-mpu-6050-imu-sensor-...

This tutorial helped us to understand how our potentiometer and gyroscope picked up data. Through the serial port, we learned the data values for yaw, pitch and roll.

For us, understanding how the movements of the body relate to yaw, pitch, and roll values and how to interpret those values were the biggest challenges. To better visualize yaw, pitch, and roll, we've attached a useful diagram above.

# Step 4: Arduino Code

As mentioned earlier, our first step was to understand the yaw, pitch, and roll values from the gyroscope/accelerometer. Once we had this figured out, we decided to write some basic code and test it with an LED. Depending on the motions, the LED would either light up or turn off. This gave us an easily accessed way to demo as we continued building on our project.


![Module shells in AutoCAD](https://cdn.instructables.com/FIT/OSM5/I96W8CFC/FITOSM5I96W8CFC.MEDIUM.jpg?width=614)
# Step 5: Creating the Power System

We designed a whole wearable system that connects LiPo batteries in parallel with other wearable modules in order to power them. The modules consist of a charging/discharging module that is capable of charging external devices through USB or direct connection to output terminals, as well as allowing the battery modules to be charged with a micro-USB cable. Another module consists of an Arduino Micro Pro that serves as a computing module capable of powering all sorts of wearable computing projects. The final module allows a breadboard to easily be combined with the system, enabling rapid prototyping of wearable projects.

The DXG and STI files from AutoCAD can be downloaded from this page. These are free for personal use, but please no commercial use without permission!

We had access to a high print quality 3D printer called the Objet, but any 3D printer with at least a .5mm resolution that can also print over-hangs should be able to do an adequate job.

If you do not have access to a 3D printer, easy power systems using a 9V battery and linear or switching regulator (to lower 9V to 5V) can be used to power the Arduino, laser, and gyroscope units. In fact Arduino's often have an on-board regulator that lowers voltages as high as 12v down to the Arduino's operating voltage of 5V. In this case the 9V battery should be attached directly to a pin that's usually labeled RAW. Make sure to check the capabilities of your individual Arduino, so that you don't accidentally supply too much power and fry it.

Once the modules have been 3D printed you will need to start building their innards.


![LiPo dissasembly](https://cdn.instructables.com/F5K/4QIV/I9GWD4IX/F5K4QIVI9GWD4IX.LARGE.jpg)

![LiPo seperation with solvent](https://cdn.instructables.com/FVI/C3MI/I9GWD4KZ/FVIC3MII9GWD4KZ.LARGE.jpg)
Step 1: Disassemble 4S LiPos

The battery packs that we ordered are actually four individual 3.7V battery packs linked in series to create a 14.8V pack. These are stuck together with glue so it's easiest to use a solvent like rubbing alcohol to ease their separation. Once the packs are un-glued, use a soldering iron to take off all the wires protruding from the packs, be carful not to cause any shorts! These pack are high voltage and can cause bright sparks that can shock you or cause a fire! Be careful!! Once you have taken off all the wires, use scissors or wire cutters to cut the tabs holding the cells together, make sure to cut them in the middle to ensure that there's enough tab left to be soldered to.

Step 2: Solder on LiPo PCM

This step is fairly straightforward. Start by folding the battery terminal tabs over into the open area above the battery. Use short wires to connect the battery terminals to the protected terminals on the PCM. These are usually labelled with a B+ and B-. Make sure the wires and PCM are contained within the space at the top of the LiPo cell, otherwise it will be difficult to fit them into the 3D models.

Step 3: Glue magnets

Use the gorilla glue epoxy to set the magnets in their grooves. Make sure that you keep the polarity consistent. One side should be designated as positive polarity and the other negative. For instance we made the right side positive and the left negative. The polarity is the same if they repel each other and opposite if they attract; basic stuff. Make sure that the magnets on the same side repel each other. Once you have figured out how the magnets are to be laid out, put epoxy on the bottom of the magnet grooves of the 3D model and press the magnets into the grooves. Wipe away any epoxy that gets on top of the magnets, the top surface should be clean for good connection to the battery.

Step 4: Lay copper tape

Lay down copper tape between the magnets. Since only one side of the tape is conductive due to the adhesive on the back, you will have to fold the ends over so that the copper side without the adhesive is in contact with the magnets. To keep the tape down, apply epoxy to the top of the tape and magnet. Verify that the resistance between the two magnets is not too high ( <10 Ohms). After this is completed, add copper tape to the back of the LiPo; lined up so that they will be in contact with the strips in the enclosure. Solder the tape to the protected power terminals of the PCM (labelled P+ and P-).

Step 5: Put it all together

Insert the battery cell into the model and put the lid on. Drive the screws into the holes in the side to secure the lid. Verify that you have the same voltage across the magnets that you do across the battery. Make sure things are well insulated with electrical tape to prevent shorts.