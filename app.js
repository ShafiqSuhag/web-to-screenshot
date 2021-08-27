function fetchApiServer(url=''){
    
    url ='https://api.screenshotmachine.com?key=8beab1&url=https%3A%2F%2Fshafiq-portfolio.netlify.app%2Fecommerce-website.html&device=phone&dimension=480x800&format=png';
    // url ='https://api.screenshotmachine.com/?key=8beab1&url=&dimension=1024x768';
    fetch(url)
    .then(res => displayPreview(res.url))
    // .then(res => console.log(res.url))
    // .then(res => res.json())
    // .then(jsonData => displayPreview(jsonData));
    // console.log(url);
}
// fetchApiServer();
function displayPreview(imgUrl='shafiq-portfolio.netlify.app/ecommerce-website.html'){
    const imageContainer = document.getElementById('image-container')
    // create a img element 
    // const newImgDiv = document.createElement('img')
    const filtered_url = imgUrl.replace('/','%2F')
    // const newImg = `<img src="https://api.screenshotmachine.com?key=8beab1&url=https%3A%2F%2F${filtered_url}&device=phone&dimension=480x800&format=png" alt="" height="400px">`


// https://api.screenshotmachine.com?key=8beab1&url=https%3A%2F%2Fshafiq-portfolio.netlify.app%2ecommerce-website.html&device=phone&dimension=480x800&format=png
// https://api.screenshotmachine.com?key=8beab1&url=https%3A%2F%2Fshafiq-portfolio.netlify.app%2Fecommerce-website.html&device=phone&dimension=480x800&format=png


    const newImg2 = document.createElement('img')
    // newImg2.setAttribute('src',`https://api.screenshotmachine.com?key=8beab1&url=https%3A%2F%2F${filtered_url}&device=phone&dimension=480x800&format=png`)
    // newImg2.setAttribute('height',400)
    // imageContainer.appendChild(newImg2)
    // console.log(imageContainer)
    // console.log(`https://api.screenshotmachine.com?key=8beab1&url=https%3A%2F%2F${filtered_url}&device=phone&dimension=480x800&format=png`)

    const addImage = document.createElement('div')
    // addImage.innerHTML=`<div class="d-flex flex-column align-items-center mx-2" style="">
    //     <img src="https://api.screenshotmachine.com?key=8beab1&url=https%3A%2F%2Fshafiq-portfolio.netlify.app%2Fecommerce-website.html&device=phone&dimension=480x800&format=png" alt="" width="300px";height="400";>
    //     <button class="px-3 py-2 bg-info rounded mt-5 text-white">${imgUrl}</button>
    // </div>`
    addImage.innerHTML= `<div class="parent ">
    
    <div class="d-flex flex-column align-items-center position-relative" >
            <img src="loader.gif" alt="" srcset="" class="position-absolute" width="300px";height="400">
            <img class="position-relative" src="https://api.screenshotmachine.com?key=8beab1&url=https%3A%2F%2Fshafiq-portfolio.netlify.app%2Fecommerce-website.html&device=phone&dimension=480x800&format=png" alt="" width="300px";height="400";>
            <p>shafiq-portfolio.netlify.app</p>
        </div>
    </div>`
    imageContainer.appendChild(addImage)

}

function displayScreenshot (imgUrl='shafiq-portfolio.netlify.app/ecommerce-website.html'){


    // get radio button value 
    const deviceSelect = document.getElementsByName('device');
    let selectedDevice = '';
    let deviceConfig = '';
    let imgSize = '';
    for(const device of deviceSelect){
        // console.log(device)
        if(device.checked){
           console.log(device.value)
        //    selectedDevice = device.value;
           
            if(device.value == 'mobile'){
                deviceConfig = 'device=phone&dimension=480x800'
                imgSize ='width="300px";height="400"'
            }
            else{
                deviceConfig = 'device=desktop&dimension=1920x1080'
                imgSize ='width="780px";height="400"'
            }
            break;
        }
        
    }

    // based on device configure device settings 
    // selectedDevice

    // device=phone&dimension=480x800
    // &device=desktop&dimension=1024x768


    const websiteUrlInput = document.getElementById('website-url-input');
    if(websiteUrlInput.value){
        imgUrl = websiteUrlInput.value ; 
    }
    

    const imageContainer = document.getElementById('image-container')
    const filtered_url = imgUrl.replace('/','%2F')

    const addImage = document.createElement('div')
    addImage.innerHTML= `<div class="parent content-bg ">
    <div class="d-flex flex-column align-items-center position-relative" >
            <img src="loader.gif" alt="" srcset="" class="position-absolute" width="300px";height="400">   
            <img style="border-radius:10px" class="position-relative" src="https://api.screenshotmachine.com?key=8beab1&url=https%3A%2F%2F${filtered_url}&${deviceConfig}&format=png" alt="" ${imgSize};>
            <p>${imgUrl}</p>
        </div>
    </div>`
    imageContainer.appendChild(addImage)
}