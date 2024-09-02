export const welcome = (recipient)=>{
    return{
        textContent : `Hi ${recipient.name},\nThanks for using Your Business! As you’ve been using the app for a while now, we’d love to hear your thoughts. Our customer feedback survey takes just a few minutes to complete and will help us to make our offering even better. Take survey: url to your survey\nThanks for your participation!\nRegards,\nThe Your Business Team`,
        htmlContent : `
  <p>Hi ${recipient.name}.</p>
  <p>Thanks for using Your Business!</p>
  <p>As you’ve been using the app for a while now, we’d love to hear your thoughts.</p>
  <p>Our customer feedback survey takes just a few minutes to complete and will help us to make our offering even better.</p>
  <p><a href="url to your survey" target="_blank">Take survey</a></p>
  <p>Thanks for your participation!</p>
  <br>
  <p>Regards,</p>
  <p>The Your Business Team</p>
`}
}