export const order = (recipient)=>{
    let htmlContent = `<div class="template-item__preview-wrap mb-16 mb-md-26">
                            <div class="scroll-y template-item__preview-link active">
                                <div class="scroll-body" desktop-body="">
                                    <picture>
                                        <source srcset="${recipient.img}" type="image/webp">
                                        <img class="scroll-body-item template-item__preview-image" loading="lazy" desktop-item="" width="500" height="714" src="${recipient.img}" alt="${recipient.productname}">
                                    </picture>
                                </div>
                                <div class="scroll-scrollbar" scrollbar="" desktop-scrollbar="" style="height: 488.25px;">
                                    <div class="scroll-trumb" desktop-trumb="" style="height: 1248px;"></div>
                                </div>
                            </div>
                            <div class="scroll-y template-item__preview-link">
                                <div class="scroll-body" mobile-body="">
                                    <picture>
                                        <source srcset="${recipient.img}" type="image/webp">
                                        <img class="scroll-body-item template-item__preview-image" loading="lazy" width="320" height="714" mobile-item="" src="${recipient.img}" alt="${recipient.productname}" title="${recipient.productname}">
                                    </picture>
                                </div>
                                <div class="scroll-scrollbar" scrollbar="" mobile-scrollbar="" style="height: 0px;">
                                    <div class="scroll-trumb" mobile-trumb="" style="height: 0px;"></div>
                                </div>
                            </div>
                    </div>`

                    return {
                        textContent : `Hi ${recipient.name},\nThanks for using Your Business! As you’ve been using the app for a while now, we’d love to hear your thoughts. Our customer feedback survey takes just a few minutes to complete and will help us to make our offering even better. Take survey: url to your survey\nThanks for your participation!\nRegards,\nThe Your Business Team`,
                        htmlContent : htmlContent}
}

