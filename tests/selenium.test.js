const {Builder, By, until} = require('selenium-webdriver');
const chromedriver = require('chromedriver');
chromedriver.start();


describe('BooksApp Tests', () => {
    let driver;
  
    beforeEach(async () => {
      driver = new Builder().forBrowser('chrome').build();
    });
  
    afterEach(async () => {
      await driver.quit();
    });

    it("should register a new book successfully", async () => {
        await driver.get('http://localhost:8080/modSeries');
        
        await driver.findElement(By.id('title')).sendKeys('Breaking Bad');
        await driver.findElement(By.id('imgurl')).sendKeys('https://img2.hulu.com/user/v3/artwork/f6451467-97a8-4ddf-9ae8-e9e4cbb53fc8?base_image_bucket_name=image_manager&base_image=bc1a1c50-6786-4cf7-ae75-75de958b64e1&size=458x687&format=webp');
        await driver.findElement(By.id('link')).sendKeys('https://youtube.com/watch?v=123');
        await driver.findElement(By.id('genero')).sendKeys('Drama');
        //await driver.findElement(By.id('button[type="submit"]')).click();
        await driver.sleep(2000);
    });
    /*
    it("should register a new book successfully", async () => {
        await driver.get("http://localhost:5000/edit-book/1?edit=true");
        
        await driver.findElement(By.id("title")).sendKeys("The Great Adventure");
        await driver.findElement(By.id("year")).sendKeys("2023");
        await driver.findElement(By.id("category")).sendKeys("Fiction");
        await driver.findElement(By.id("author")).sendKeys("John Smith");
        await driver.findElement(By.id("editorial")).sendKeys("Penguin");
        //await driver.findElement(By.css(".btn.btn-primary.float-end.mt-2")).click();
        
        await driver.sleep(2000);
    });
    
    it("should register a new book successfully", async () => {
        await driver.get("http://localhost:5000/register-category");
        
        await driver.findElement(By.id("name")).sendKeys("Adventure ");
        await driver.findElement(By.id("description")).sendKeys("dhdhdhhd");
       
        //await driver.findElement(By.css(".btn.btn-primary.float-end.mt-2")).click();
        
        await driver.sleep(2000);
    });
    it("should register a new book successfully", async () => {
        await driver.get("http://localhost:5000/edit-category/1?edit=true");
        
        await driver.findElement(By.id("name")).sendKeys("Adventure ");
        await driver.findElement(By.id("description")).sendKeys("dhdhdhhd");
       
        //await driver.findElement(By.css(".btn.btn-primary.float-end.mt-2")).click();
        
        await driver.sleep(2000);
    });
    
    it("should register a new book successfully", async () => {
        await driver.get("http://localhost:5000/register-author");
        
        await driver.findElement(By.id("name")).sendKeys("Adventure ");
        await driver.findElement(By.id("email")).sendKeys("Manito@gmail.com");
        //await driver.findElement(By.css(".btn.btn-primary.float-end.mt-2")).click();
        
        await driver.sleep(2000);
    });
    it("should register a new book successfully", async () => {
        await driver.get("http://localhost:5000/edit-author/2?edit=true");
        
        await driver.findElement(By.id("name")).sendKeys("Adventure ");
        await driver.findElement(By.id("email")).sendKeys("Manito@gmail.com");
        //await driver.findElement(By.css(".btn.btn-primary.float-end.mt-2")).click();
        
        await driver.sleep(2000);
    });
    
    it("should register a new book successfully", async () => {
        await driver.get("http://localhost:5000/register-editorial");
        
        await driver.findElement(By.id("name")).sendKeys("Adventure ");
        await driver.findElement(By.id("phone")).sendKeys("829-333-2222");
        await driver.findElement(By.id("country")).sendKeys("Republica Dominicana");
        //await driver.findElement(By.css(".btn.btn-primary.float-end.mt-2")).click();
        
        await driver.sleep(2000);
    });
    it("should register a new book successfully", async () => {
        await driver.get("http://localhost:5000/edit-editorial/1?edit=true");
        
        await driver.findElement(By.id("name")).sendKeys("Adventure ");
        await driver.findElement(By.id("phone")).sendKeys("829-333-2222");
        await driver.findElement(By.id("country")).sendKeys("Republica Dominicana");
        //await driver.findElement(By.css(".btn.btn-primary.float-end.mt-2")).click();
        
        await driver.sleep(2000);
    });
    it("should register a new book successfully", async () => {
        await driver.get("http://localhost:5000/");
        
        await driver.findElement(By.css('[id="button"]')).click();
        
        await driver.sleep(2000);
    });
    
    it("Detalle del libro", async () => {
        await driver.get("http://localhost:5000/book-details");
        
        
    });
    

    

    -----------------------------------------------------------------------
    it("Como usuario quiero registrar una categoria para mostrarlo en ele ", async () => {
        await driver.get("http://localhost:5000/register-book");
        
    
        await driver.findElement(By.id("category-name")).sendKeys("Vanguardia");
        await driver.findElement(By.id("description")).sendKeys("El mas placentero");
       
        //await driver.findElement(By.css(".btn.btn-primary.float-end.mt-2")).click();
        
        await driver.sleep(1000);
await driver.findElement(By.css("button[type='submit']")).click();

    });




    it("should search for a book", async () => {
        await driver.get("http://localhost:5000/books");
        
        await driver.findElement(By.name("search")).sendKeys("Romance");
        //await driver.findElement(By.id("searchButton")).click();
        await driver.findElement(By.css("button[type='submit']")).click();
        await driver.sleep(1000);
        



    });

    it("should validate empty form submission", async () => {
        await driver.get("http://localhost:5000/register-book");
        
        await driver.findElement(By.css("a.btn.btn-secondary.float-end.mt-2")).click();
        
        await driver.sleep(2000);
    });

    it("should edit a book", async () => {
        await driver.get("http://localhost:5000/admin-books");
        
        await driver.findElement(By.css("a.btn.btn-secondary.fioat-end.mt-2")).click();
        await driver.findElement(By.id("title")).clear();
        await driver.findElement(By.id("title")).sendKeys("Updated Title");
        //await driver.findElement(By.css(".save-button")).click();
        
        await driver.sleep(2000);
    });

    it("should delete a book", async () => {
        await driver.get("http://localhost:5000/admin-books");
        
        await driver.findElement(By.css(".btn-delete-book")).click();

        await driver.switchTo().alert().accept();
        
        await driver.sleep(2000);
    });*/
});