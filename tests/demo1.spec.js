import { test }  from '@playwright/test';

test("@sanity sanity test", async({page})=>{ 


     await page.goto("https://www.google.com/");
     console.log("Sanity group test cases");
     console.log("Sanity group test cases");
     console.log("Sanity group test cases");

     await page.waitForTimeout(3000);
   
 });

    
 test("@smoke smoke test", async({page})=>{ 


     await page.goto("https://www.facebook.com/");
     console.log("smoke group test cases");
     console.log("smoke group test cases");
     console.log("smoke group test cases");

     await page.waitForTimeout(3000);
   
 });

    

 test("@e2e e2e test", async({page})=>{ 


     await page.goto("https://www.redbus.in/");
     console.log("e2e group test cases");
     console.log("e2e group test cases");
     console.log("e2e group test cases");

     await page.waitForTimeout(3000);
   
 });

    