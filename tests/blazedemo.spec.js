import {test, describe} from '@playwright/test';
test.describe('Blaze Demo test critical paths test suite', ()=>{
    test.beforeEach(async (page)=>{
        await page.goto('https://www.demoblaze.com/')
    })

test("it should be able to contact blaze", async (page)=>{
    await page.locator('a.nav-link').getByText('Contact').click()
    await page.type('#recipient-email', 'whatshouldIwrite@email.com')
    await page.type("#recipient-name", "Manuel Marques")
    await page.type("#message-text", "Hello, I hope this message finds you well")
    await page.getByText("Send message").click()
    await expect(page.getByText("Thanks for the message!!").toBeVisible())
})  
})

