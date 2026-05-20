# NovaTech-Day-1
A SaaS website landing page using Route53, ACM, Cloudfront and S3
# NovaTech Static Website Hosting on AWS

## Project Overview

Designed and deployed a scalable static SaaS website architecture using AWS S3 and CloudFront.

## Architecture

Users → CloudFront → Private S3 Bucket
<img width="741" height="341" alt="Untitled Diagram drawio" src="https://github.com/user-attachments/assets/fa5255ae-66bd-49dd-8c6d-29a1b042eba5" />


## AWS Services Used

- IAM
- Route 53
- ACM
- S3
- CloudFront
  

## Features

- HTTPS enabled
- CDN acceleration
- Secure private S3 bucket
- IAM best practices

## Problem Statement

NovaTech required a globally accessible and low-cost static hosting solution without managing servers.

## Solution

Implemented a serverless static website architecture using Amazon S3 and CloudFront.

# Step 1:
I created a new user as nova-admin , gave the user least previliges and enabled MFA.

<img width="1918" height="907" alt="Screenshot 2026-05-20 230110" src="https://github.com/user-attachments/assets/6b873914-0867-4706-b188-f60c92a48d73" />

# Step 2:
Tried to use Route53 to register a domain just for this, but free tier isnt allowed to use Route53 and hence we cant use ACm also
<img width="1912" height="907" alt="Screenshot 2026-05-20 213734" src="https://github.com/user-attachments/assets/b9328572-fc4c-4ae6-9d9e-fa186bc41ce8" />

# Step 3:
Created a S3 bucket
<img width="1915" height="922" alt="Screenshot 2026-05-20 224256" src="https://github.com/user-attachments/assets/ce3517a0-f848-4d92-beb3-dbedf503e30b" />

After creating to S3 bucket go to property
<img width="1535" height="387" alt="Screenshot 2026-05-20 235103" src="https://github.com/user-attachments/assets/737d1240-2921-470e-b822-a574fb08e31a" />

Tried to open the URL but got a 403 because the bucket is still private
<img width="1918" height="967" alt="Screenshot 2026-05-20 215248" src="https://github.com/user-attachments/assets/50fd2574-eb1d-43d0-a4ba-c6b9db75a3c8" />

# Step 4:
This is where the CLoudFront comes in , create a distributions and wait for 10 mins for it deploy
<img width="1918" height="906" alt="Screenshot 2026-05-20 221012" src="https://github.com/user-attachments/assets/0b3f25f4-ca80-491d-922b-57b2f49b77e3" />

<img width="1568" height="635" alt="Screenshot 2026-05-20 221153" src="https://github.com/user-attachments/assets/479969d1-2aac-4a58-a279-bf0411537393" />

After it gets deployed , Open the distribution go to General -> Settings -> Edit
<img width="1903" height="907" alt="Screenshot 2026-05-20 224232" src="https://github.com/user-attachments/assets/c0788920-54d4-4fad-8859-37d9014a1f3b" />

## Outcome

Successfully deployed a scalable and production-style SaaS landing page infrastructure.

<img width="1907" height="957" alt="Screenshot 2026-05-21 000334" src="https://github.com/user-attachments/assets/015270b9-0ed9-494b-b9c2-f9f38ac04cc9" />



## Security Best Practices

- Blocked public bucket access
- Used CloudFront private access
- IAM user instead of root account
- HTTPS delivery

## Cost Optimization

- Serverless hosting
- CDN caching
- Low-cost architecture

