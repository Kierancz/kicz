---
title: Wearable Computing and Parkinson's FOG Assistant
description: A how to guide
date: 2015-05-07
layout: Post
---

![power modules](https://cdn.instructables.com/FUK/CTU1/I9CLX032/FUKCTU1I9CLX032.MEDIUM.jpg)

<iframe width="560" height="315" src="https://www.youtube.com/embed/Pmr8eylvb8s?rel=0" frameborder="0" allowfullscreen></iframe>

Update: This was a short project I undertook, which lasted just over a month. There's a lot I would change, from the design of the battery modules (switching to higher energy density 18650 LiMnCo cells) to improvements of the code. This tutorial is still relevant as a reference for what's possible through rapid prototyping and as a starting point for anyone working on wearables or gait analysis.

Many useful applications for the cheap processing power and sensors we have today are limited by the short duration of use provided by our batteries. To solve this, slim LiPo battery modules were made that attach to a user’s belt with a simple clip on the back. Each module contains a LiPo cell, LiPo protection circuit (PCM), and magnetic power terminals to allow them to be easily snapped into chains to provide more power. These power modules are linked in parallel to a control module that contains a step-up regulator with integrated USB to allow it to charge a phone or other devices, power terminals for powering loads with non-standard connections, and an internal LiPo charger with micro-USB connection for convenient charging individually or as a chain.

As a demonstration of the possibilities these modules open up, we decided to focus on creating a wearable device that enables people diagnosed with Parkinson’s disease (PD) to escape Freeze of Gait (FOG) moments and improve their mobility and independence. To do this, a gyroscope constantly monitors a patient’s motion to identify an incidence of slowed or frozen gait. In the case of a freeze, a laser diode with a line projection lens shines a laser-line in front of a user so that they have a visual cue to step forward, replacing the cueing function of a PD patient’s impaired Basal ganglia. Similar techniques have successfully been used to reduce FoG moments and improve walking velocity.

# Step 1: Materials and Tools

### Power Module Parts:

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

- Screws 3.6mm Length x 2.2mm Diameter

We also found these locally, unfortunately Home Depot is unlikely to carry screws this small.

### Gait Module Parts:

Minimum parts:

- Arduino Pro Mini/Micro

We used an Arduino Pro Micro from Sparkfun.

- Accelerometer/Gyroscope MPU 6050

- Laser diode with a lens that projects a line

These laser diodes with a lens to focus the beam into a line were also found on ebay.

- A mini-breadboard for easy connections to the Arduino.

We found 5 of these little cuties on eBay.

### Belt or Waist attachment Parts:

- These modules can use either an elastic or adjustable strap as well as metal clips so that they can be attached to the waist without a belt. We used these bail making pliers to bend 3003 aluminum strips into clips for the modules.

### Parts for improvements:

- Through-hole potentiometer for gait-detection sensitivity adjustment.

- Through-hole RGB LED for feedback.

- Buzzer motor or solenoid for haptic feedback and gait-pace setting.

### Other Tools:

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

As mentioned earlier, our first step was to understand the yaw, pitch, and roll values from the gyroscope/accelerometer. We observed that the yaw values from the gyroscope were the biggest identifier of a walking gait. We created a custom algorithm that counted the deviations from the computed average yaw value to the left and right as they occurred when taking a step with right and left legs respectively. When the L and R count values were near a 1/1 ratio of the average we determined that walking had occurred. We then wrote more logic to detect when walking stopped after previous walking had been detected and then fired the laser (an LED while testing). Not the most accurate method, but it worked pretty well for the most part and was a simple routine that performed well on an arduino mini. 

```Arduino

// I2Cdev and MPU6050 must be installed as libraries, or else the .cpp/.h files
// for both classes must be in the include path of your project
#include "I2Cdev.h"

#include "MPU6050_6Axis_MotionApps20.h"
//#include "MPU6050.h" // not necessary if using MotionApps include file

// Arduino Wire library is required if I2Cdev I2CDEV_ARDUINO_WIRE implementation
// is used in I2Cdev.h
#if I2CDEV_IMPLEMENTATION == I2CDEV_ARDUINO_WIRE
    #include "Wire.h"
#endif

// class default I2C address is 0x68
// specific I2C addresses may be passed as a parameter here
// AD0 low = 0x68 (default for SparkFun breakout and InvenSense evaluation board)
// AD0 high = 0x69
MPU6050 mpu;



#define LED_PIN 13 // (Arduino is 13, Teensy is 11, Teensy++ is 6)
bool blinkState = false;

// MPU control/status vars
bool dmpReady = false;  // set true if DMP init was successful
uint8_t mpuIntStatus;   // holds actual interrupt status byte from MPU
uint8_t devStatus;      // return status after each device operation (0 = success, !0 = error)
uint16_t packetSize;    // expected DMP packet size (default is 42 bytes)
uint16_t fifoCount;     // count of all bytes currently in FIFO
uint8_t fifoBuffer[64]; // FIFO storage buffer

// orientation/motion vars
Quaternion q;           // [w, x, y, z]         quaternion container
VectorInt16 aa;         // [x, y, z]            accel sensor measurements
VectorInt16 aaReal;     // [x, y, z]            gravity-free accel sensor measurements
VectorInt16 aaWorld;    // [x, y, z]            world-frame accel sensor measurements
VectorFloat gravity;    // [x, y, z]            gravity vector
float euler[3];         // [psi, theta, phi]    Euler angle container
float ypr[3];           // [yaw, pitch, roll]   yaw/pitch/roll container and gravity vector

// packet structure for InvenSense teapot demo
uint8_t teapotPacket[14] = { '$', 0x02, 0,0, 0,0, 0,0, 0,0, 0x00, 0x00, '\r', '\n' };

//Other Variables
int led = 8; 
int stabilize = 0;
const int numReadings = 200;
int yawSample[numReadings];
int index = 0;
int total = 0;
int aveYaw = 0;
int minYaw = 1000;
int maxYaw = 0;
int difYaw = 0;
int oldDifYaw = 0;
int iteration = 0;
int butPin = 4;
int butState = 0;
int initIter = 0;
float posCount = 0;
float negCount = 0;
boolean wasWalking = false;
int potPin = A0;



// ================================================================
// ===               INTERRUPT DETECTION ROUTINE                ===
// ================================================================

volatile bool mpuInterrupt = false;     // indicates whether MPU interrupt pin has gone high
void dmpDataReady() {
    mpuInterrupt = true;
}



// ================================================================
// ===                      INITIAL SETUP                       ===
// ================================================================

void setup() {
    // join I2C bus (I2Cdev library doesn't do this automatically)
    #if I2CDEV_IMPLEMENTATION == I2CDEV_ARDUINO_WIRE
        Wire.begin();
        TWBR = 24; // 400kHz I2C clock (200kHz if CPU is 8MHz)
    #elif I2CDEV_IMPLEMENTATION == I2CDEV_BUILTIN_FASTWIRE
        Fastwire::setup(400, true);
    #endif

    // initialize serial communication
    // (115200 chosen because it is required for Teapot Demo output, but it's
    // really up to you depending on your project)
    Serial.begin(115200);
    while (!Serial); // wait for Leonardo enumeration, others continue immediately

    // NOTE: 8MHz or slower host processors, like the Teensy @ 3.3v or Ardunio
    // Pro Mini running at 3.3v, cannot handle this baud rate reliably due to
    // the baud timing being too misaligned with processor ticks. You must use
    // 38400 or slower in these cases, or use some kind of external separate
    // crystal solution for the UART timer.

    // initialize device
    Serial.println(F("Initializing I2C devices..."));
    mpu.initialize();

    // verify connection
    Serial.println(F("Testing device connections..."));
    Serial.println(mpu.testConnection() ? F("MPU6050 connection successful") : F("MPU6050 connection failed"));

    // load and configure the DMP
    Serial.println(F("Initializing DMP..."));
    devStatus = mpu.dmpInitialize();

    // supply your own gyro offsets here, scaled for min sensitivity
    mpu.setXGyroOffset(220);
    mpu.setYGyroOffset(76);
    mpu.setZGyroOffset(-85);
    mpu.setZAccelOffset(1788); // 1688 factory default for my test chip

    // make sure it worked (returns 0 if so)
    if (devStatus == 0) {
        // turn on the DMP, now that it's ready
        Serial.println(F("Enabling DMP..."));
        mpu.setDMPEnabled(true);

        // enable Arduino interrupt detection
        Serial.println(F("Enabling interrupt detection (Arduino external interrupt 0)..."));
        attachInterrupt(0, dmpDataReady, RISING);
        mpuIntStatus = mpu.getIntStatus();

        // set our DMP Ready flag so the main loop() function knows it's okay to use it
        Serial.println(F("DMP ready! Waiting for first interrupt..."));
        dmpReady = true;

        // get expected DMP packet size for later comparison
        packetSize = mpu.dmpGetFIFOPacketSize();
    } else {
        // ERROR!
        // 1 = initial memory load failed
        // 2 = DMP configuration updates failed
        // (if it's going to break, usually the code will be 1)
        Serial.print(F("DMP Initialization failed (code "));
        Serial.print(devStatus);
        Serial.println(F(")"));
    }

    // configure LED for output
    pinMode(LED_PIN, OUTPUT);
    pinMode(led, OUTPUT);
    pinMode(butPin, INPUT);
    pinMode(potPin, INPUT);
    
    //initialize all the readings to 0:
    for(int thisReading = 0; thisReading < numReadings; thisReading++) yawSample[thisReading] = 0;
}



// ================================================================
// ===                    MAIN PROGRAM LOOP                     ===
// ================================================================

void loop() {
    // if programming failed, don't try to do anything
    if (!dmpReady) return;

    // wait for MPU interrupt or extra packet(s) available
    while (!mpuInterrupt && fifoCount < packetSize) {
        // other program behavior stuff here
        // .
        // .
        // .
        // if you are really paranoid you can frequently test in between other
        // stuff to see if mpuInterrupt is true, and if so, "break;" from the
        // while() loop to immediately process the MPU data
        // .
        // .
        // .
    }

    // reset interrupt flag and get INT_STATUS byte
    mpuInterrupt = false;
    mpuIntStatus = mpu.getIntStatus();

    // get current FIFO count
    fifoCount = mpu.getFIFOCount();

    // check for overflow (this should never happen unless our code is too inefficient)
    if ((mpuIntStatus & 0x10) || fifoCount == 1024) {
        // reset so we can continue cleanly
        mpu.resetFIFO();
        Serial.println(F("FIFO overflow!"));

    // otherwise, check for DMP data ready interrupt (this should happen frequently)
    } else if (mpuIntStatus & 0x02) {
        // wait for correct available data length, should be a VERY short wait
        while (fifoCount < packetSize) fifoCount = mpu.getFIFOCount();

        // read a packet from FIFO
        mpu.getFIFOBytes(fifoBuffer, packetSize);
        
        // track FIFO count here in case there is > 1 packet available
        // (this lets us immediately read more without waiting for an interrupt)
        fifoCount -= packetSize;

        #ifdef OUTPUT_READABLE_QUATERNION
            // display quaternion values in easy matrix form: w x y z
            mpu.dmpGetQuaternion(&q, fifoBuffer);
            Serial.print("quat\t");
            Serial.print(q.w);
            Serial.print("\t");
            Serial.print(q.x);
            Serial.print("\t");
            Serial.print(q.y);
            Serial.print("\t");
            Serial.println(q.z);
        #endif

        #ifdef OUTPUT_READABLE_EULER
            // display Euler angles in degrees
            mpu.dmpGetQuaternion(&q, fifoBuffer);
            mpu.dmpGetEuler(euler, &q);
            Serial.print("euler\t");
            Serial.print(euler[0] * 180/M_PI);
            Serial.print("\t");
            Serial.print(euler[1] * 180/M_PI);
            Serial.print("\t");
            Serial.println(euler[2] * 180/M_PI);
        #endif

        #ifdef OUTPUT_READABLE_YAWPITCHROLL
            // display Euler angles in degrees
            mpu.dmpGetQuaternion(&q, fifoBuffer);
            mpu.dmpGetGravity(&gravity, &q);
            mpu.dmpGetYawPitchRoll(ypr, &q, &gravity);
            Serial.print("ypr\t");
            Serial.print(ypr[0] * 180/M_PI);
            Serial.print("\t");
            Serial.print(ypr[1] * 180/M_PI);
            Serial.print("\t");
            Serial.println(ypr[2] * 180/M_PI);
        #endif

        #ifdef OUTPUT_READABLE_REALACCEL
            // display real acceleration, adjusted to remove gravity
            mpu.dmpGetQuaternion(&q, fifoBuffer);
            mpu.dmpGetAccel(&aa, fifoBuffer);
            mpu.dmpGetGravity(&gravity, &q);
            mpu.dmpGetLinearAccel(&aaReal, &aa, &gravity);
            Serial.print("areal\t");
            Serial.print(aaReal.x);
            Serial.print("\t");
            Serial.print(aaReal.y);
            Serial.print("\t");
            Serial.println(aaReal.z);
        #endif

        #ifdef OUTPUT_READABLE_WORLDACCEL
            // display initial world-frame acceleration, adjusted to remove gravity
            // and rotated based on known orientation from quaternion
            mpu.dmpGetQuaternion(&q, fifoBuffer);
            mpu.dmpGetAccel(&aa, fifoBuffer);
            mpu.dmpGetGravity(&gravity, &q);
            mpu.dmpGetLinearAccel(&aaReal, &aa, &gravity);
            mpu.dmpGetLinearAccelInWorld(&aaWorld, &aaReal, &q);
            Serial.print("aworld\t");
            Serial.print(aaWorld.x);
            Serial.print("\t");
            Serial.print(aaWorld.y);
            Serial.print("\t");
            Serial.println(aaWorld.z);
        #endif
    
        #ifdef OUTPUT_TEAPOT
            // display quaternion values in InvenSense Teapot demo format:
            teapotPacket[2] = fifoBuffer[0];
            teapotPacket[3] = fifoBuffer[1];
            teapotPacket[4] = fifoBuffer[4];
            teapotPacket[5] = fifoBuffer[5];
            teapotPacket[6] = fifoBuffer[8];
            teapotPacket[7] = fifoBuffer[9];
            teapotPacket[8] = fifoBuffer[12];
            teapotPacket[9] = fifoBuffer[13];
            Serial.write(teapotPacket, 14);
            teapotPacket[11]++; // packetCount, loops at 0xFF on purpose
        #endif

        // blink LED to indicate activity
        //blinkState = !blinkState;
        //digitalWrite(LED_PIN, blinkState);
    }
    
    if(stabilize < 1400) {
      stabilize++;
      Serial.print("Stabilizing Sensor Values");
    }
   
    if(stabilize >= 1400) {
      iteration++; 
        Serial.println("IPNAMiMaOD: ");
        Serial.print(iteration);
        Serial.print("  ");
        Serial.print(posCount);
        Serial.print("  ");
        Serial.print(negCount);
        Serial.print("  ");
        Serial.print(aveYaw);
        Serial.print("  ");
        Serial.print(minYaw);
        Serial.print("  ");
        Serial.print(maxYaw);
        Serial.print("  ");
        Serial.print(oldDifYaw);
        Serial.print("  ");
        Serial.print(difYaw);
        Serial.print("  ");
        Serial.print("Hello Pot");
        Serial.print(analogRead(potPin));
        Serial.print("  ");
        
      // Calculate average sensor values
      total = total - yawSample[index];
      yawSample[index] = (ypr[0] * (180/M_PI));
      total = total + yawSample[index];
      index = index + 1;
      //if at the end of the array, wrap around to the beginning
      if(index >= numReadings) index = 0;
      
      minYaw = min(minYaw, yawSample[index]);
      maxYaw = max(maxYaw, yawSample[index]);
      aveYaw = total / numReadings;

      butState = digitalRead(butPin);
      //Serial.print("butPin");
      //Serial.print(butState);
      
      // if walking has stopped after walking has been detected fire the laser
      if(!walking() && wasWalking && iteration > 200) {
        digitalWrite(led, HIGH);
      }   
      if(walking()) {
        Serial.println("WALKING DETECTED");
        initIter = iteration;
        //digitalWrite(led, LOW);
        wasWalking = true;
      }
      if(iteration > (initIter + 100)) {
        digitalWrite(led, LOW);
      }
      if(iteration > 200) {
        difYaw = abs(maxYaw - minYaw);
      }
      // reset our values every 500 iterations
      if(iteration > 500) {
        iteration = 0;
        posCount = 0;
        negCount = 0;
        minYaw = aveYaw;
        maxYaw = aveYaw;
        oldDifYaw = difYaw;
        initIter = 0;
      }
    }  
}

// detects walking gait using deviation from average yaw
boolean walking () {
  if(ypr[0] * (180/M_PI) >= (aveYaw + 3)) {
    posCount++;
  }
  if(ypr[0] * (180/M_PI) <= (aveYaw - 3)) {
    negCount++;
  }
  if((posCount > 10) && (negCount > 10)) {
    if(.5 < posCount/negCount < 1.5) {
      return true;
    }
  }
  else return false;
  
}
```
Pretty simple stuff that could use a little refinement, but it works and it's a good starting point for a very useful device. The full code can be seen [here](https://github.com/Kierancz/gait_project/blob/master/CSCI4830_Gait_Project/CSCI4830_Gait_Project.ino)

# Step 5: Creating the Power System
![Module shells in AutoCAD](https://cdn.instructables.com/FIT/OSM5/I96W8CFC/FITOSM5I96W8CFC.MEDIUM.jpg?width=614)

We designed a whole wearable system that connects LiPo batteries in parallel with other wearable modules in order to power them. The modules consist of a charging/discharging module that is capable of charging external devices through USB or direct connection to output terminals, as well as allowing the battery modules to be charged with a micro-USB cable. Another module consists of an Arduino Micro Pro that serves as a computing module capable of powering all sorts of wearable computing projects. The final module allows a breadboard to easily be combined with the system, enabling rapid prototyping of wearable projects.

The DXG and STI files from AutoCAD can be downloaded from this page.

We had access to a high print quality 3D printer called the Objet, but any 3D printer with at least a .5mm resolution that can also print over-hangs should be able to do an adequate job.

If you do not have access to a 3D printer, easy power systems using a 9V battery and linear or switching regulator (to lower 9V to 5V) can be used to power the Arduino, laser, and gyroscope units. In fact Arduino's often have an on-board regulator that lowers voltages as high as 12v down to the Arduino's operating voltage of 5V. In this case the 9V battery should be attached directly to a pin that's usually labeled RAW. Make sure to check the capabilities of your individual Arduino, so that you don't accidentally supply too much voltage and fry it.

Once the modules have been 3D printed you will need to start building their innards.


### Step 1: Disassemble 4S LiPos

![LiPo dissasembly](https://cdn.instructables.com/F5K/4QIV/I9GWD4IX/F5K4QIVI9GWD4IX.LARGE.jpg)

![LiPo seperation with solvent](https://cdn.instructables.com/FVI/C3MI/I9GWD4KZ/FVIC3MII9GWD4KZ.LARGE.jpg)


The battery packs that we ordered are actually four individual 3.7V battery packs linked in series to create a 14.8V pack. These are stuck together with glue so it's easiest to use a solvent like rubbing alcohol to ease their separation. Once the packs are un-glued, use a soldering iron to take off all the wires protruding from the packs, be carful not to cause any shorts! These pack are high voltage and can cause bright sparks that can shock you or cause a fire! Be careful!! Once you have taken off all the wires, use scissors or wire cutters to cut the tabs holding the cells together, make sure to cut them in the middle to ensure that there's enough tab left to be soldered to.

### Step 2: Solder on LiPo PCM

This step is fairly straightforward. Start by folding the battery terminal tabs over into the open area above the battery. Use short wires to connect the battery terminals to the protected terminals on the PCM. These are usually labelled with a B+ and B-. Make sure the wires and PCM are contained within the space at the top of the LiPo cell, otherwise it will be difficult to fit them into the 3D models.

### Step 3: Glue magnets

Use the gorilla glue epoxy to set the magnets in their grooves. Make sure that you keep the polarity consistent. One side should be designated as positive polarity and the other negative. For instance we made the right side positive and the left negative. The polarity is the same if they repel each other and opposite if they attract; basic stuff. Make sure that the magnets on the same side repel each other. Once you have figured out how the magnets are to be laid out, put epoxy on the bottom of the magnet grooves of the 3D model and press the magnets into the grooves. Wipe away any epoxy that gets on top of the magnets, the top surface should be clean for good connection to the battery.

### Step 4: Lay copper tape

Lay down copper tape between the magnets. Since only one side of the tape is conductive due to the adhesive on the back, you will have to fold the ends over so that the copper side without the adhesive is in contact with the magnets. To keep the tape down, apply epoxy to the top of the tape and magnet. Verify that the resistance between the two magnets is not too high ( <10 Ohms). After this is completed, add copper tape to the back of the LiPo; lined up so that they will be in contact with the strips in the enclosure. Solder the tape to the protected power terminals of the PCM (labelled P+ and P-).

### Step 5: Put it all together

Insert the battery cell into the model and put the lid on. Drive the screws into the holes in the side to secure the lid. Verify that you have the same voltage across the magnets that you do across the battery. Make sure things are well insulated with electrical tape to prevent shorts.