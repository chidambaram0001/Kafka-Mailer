export const tracking = (recipient)=>{
  let htmlContent = `<div style="box-sizing: inherit;">
              <div style="padding: 8px 24px 8px 24px; text-align: center; max-width: 100%; box-sizing: border-box;"><img src="${recipient.img}" style="box-sizing: inherit; display: inline-block; outline: none; border: none; text-decoration: none; vertical-align: middle; max-width: 100%; height: 24px;" height="24"></div>
              <div style="font-family: inherit; font-weight: normal; padding: 16px 24px 0px 24px; text-align: center; max-width: 100%; box-sizing: border-box;">
                <h1 style="box-sizing: inherit; margin-top: 40px; margin-bottom: 16px; font-weight: inherit; margin: 0; font-size: 32px;">Your order is out for delivery</h1>
              </div>
              <div style="color: #6b6b6b; font-family: inherit; font-size: 12px; font-weight: normal; padding: 8px 24px 16px 24px; text-align: center; max-width: 100%; box-sizing: border-box;">
                
                <div class="MuiBox-root css-vii0ua" style="box-sizing: inherit;">
                  <div style="box-sizing: inherit;">
                    <p style="box-sizing: inherit; margin-top: 0px; margin-bottom: 0px;">ORDER #13432</p>
                    <p>${recipient.productname}</p>
                  </div>
                </div>
              </div>
              <div style="padding: 0px 16px 16px 16px; text-align: left; max-width: 100%; box-sizing: border-box;"><a target="_blank" style="box-sizing: inherit; color: #067df7; text-decoration: none;" href="https://filmfriends.example.com/product/203942098"><img alt="Polaroid One Step 2 product image" src="https://d1iiu589g39o6c.cloudfront.net/live/platforms/platform_s7pH1ctvjV5zjwAF/images/wptemplateimage_puqKrYVVnuLqrWXr/eniko-kis-KsLPTsYaqIQ-unsplash.jpg" style="box-sizing: inherit; display: inline-block; outline: none; border: none; text-decoration: none; vertical-align: middle; max-width: 100%;"></a></div>
              <div style="font-family: inherit; font-size: 14px; font-weight: normal; padding: 16px 24px 32px 24px; text-align: center; max-width: 100%; box-sizing: border-box;">
                <div class="MuiBox-root css-vii0ua" style="box-sizing: inherit;">
                  <div style="box-sizing: inherit;">
                    <p style="box-sizing: inherit; margin-top: 0px;">Your order with 1x <strong style="box-sizing: inherit; font-weight: 700;">Polaroid One Step 2</strong> is out for delivery. Track your shipment to see the delivery status.</p>
                    <p style="box-sizing: inherit; margin-bottom: 0px;">Estimated delivery date: <strong style="box-sizing: inherit; font-weight: 700;">May 19, 2023</strong></p>
                  </div>
                </div>
              </div>
              <div style="font-family: inherit; font-size: 16px; font-weight: normal; padding: 24px 24px 16px 24px; text-align: center; max-width: 100%; box-sizing: border-box;"><a href="https://www.usewaypoint.com" target="_blank" style="box-sizing: inherit; background-color: #0068ff; color: #FFFFFF; padding: 0px 0px; border-radius: 64px; width: auto; display: inline-block; line-height: 100%; text-decoration: none; max-width: 100%;"><span style="box-sizing: inherit;"><!--[if mso]><i style="letter-spacing: undefinedpx;mso-font-width:-100%;mso-text-raise:0" hidden>&nbsp;</i><![endif]--></span><span style="box-sizing: inherit; background-color: #0068ff; color: #FFFFFF; padding: 12px 20px; border-radius: 64px; width: auto; display: inline-block; max-width: 100%; line-height: 120%; text-decoration: none; text-transform: none; mso-padding-alt: 0px; mso-text-raise: 0;">Track my shipment</span><span style="box-sizing: inherit;"><!--[if mso]><i style="letter-spacing: undefinedpx;mso-font-width:-100%" hidden>&nbsp;</i><![endif]--></span></a></div>
              <div style="font-family: inherit; font-size: 12px; font-weight: normal; padding: 0px 24px 40px 24px; text-align: center; max-width: 100%; box-sizing: border-box;">
                <div class="MuiBox-root css-vii0ua" style="box-sizing: inherit;">
                  <div style="box-sizing: inherit;">
                    <p style="box-sizing: inherit; margin-top: 0px; margin-bottom: 0px;">FedEx tracking number: <a href="#" target="_blank" style="box-sizing: inherit; color: #0068ff;">398430232469</a></p>
                  </div>
                </div>
              </div>
            </div>`
    return {
        textContent : `Hi ${recipient.name},\nThanks for using Your Business! As you’ve been using the app for a while now, we’d love to hear your thoughts. Our customer feedback survey takes just a few minutes to complete and will help us to make our offering even better. Take survey: url to your survey\nThanks for your participation!\nRegards,\nThe Your Business Team`,
        htmlContent : htmlContent}
}

