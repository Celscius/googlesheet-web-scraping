/*
  const url
  getting close up image       =IMPORTXML(url, "//div[@data-test-id='pin-closeup-image']//@src")
  getting list of image        =IMPORTXML(url, "//div[@class='lnZ wsz zI7 iyn Hsu zmN']/div[@data-test-id='deeplink-wrapper']/a[contains(@class,'Wk9 CCY S9z ho- kVc xQ4')]//@alt")
  getting image description    =IMPORTXML(url, "//div[@class='lnZ wsz zI7 iyn Hsu zmN']/div[@data-test-id='deeplink-wrapper']/a[contains(@class,'Wk9 CCY S9z ho- kVc xQ4')]//@aria-label")
  getting uri of original url  =IMPORTXML(url, "//div[@class='lnZ wsz zI7 iyn Hsu zmN']/div[@data-test-id='deeplink-wrapper']/a[contains(@class,'Wk9 CCY S9z ho- kVc xQ4')]//@href")
  link to original image       =CONCATENATE("url",uri)
*/
