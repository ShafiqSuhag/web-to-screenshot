// function fetchApiServer(url=''){
    
//     url ='https://api.screenshotmachine.com?key=8beab1&url=https%3A%2F%2Fshafiq-portfolio.netlify.app%2Fecommerce-website.html&device=phone&dimension=480x800&format=png'
//     fetch(url)
//     .then(res => displayPreview(res.url))
    
// }
function startWithHttp(url){
    console.log(url.search('http://'))
   if(url.search('http://')==0 || url.search('https://')==0){
       console.log(url, 'found')
       return url ; 
   }else{
    console.log(url, 'not found', 'http://'+url )
    return 'http://'+url ; 
   }
}
function eventForEnter(event){
    console.log(event.key)
    if(event.key == 'Enter'){
        displayScreenshot()
    }
}
// shafiq-portfolio.netlify.app/ecommerce-website.html
function displayScreenshot (imgUrl=''){
    
    const websiteUrlInput = document.getElementById('website-url-input');
    if(websiteUrlInput.value){
        imgUrl = websiteUrlInput.value ; 
    }else{
        return;
    }

    imgUrl=  startWithHttp(imgUrl);
    // return;
    // console.log(imgUrl)
    // const validateUrl = isValidHttpUrl(imgUrl);
    // console.log(validateUrl);
    // return;
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


   
    

    const imageContainer = document.getElementById('image-container')
    let filtered_url = imgUrl.replace('/','%2F')
    filtered_url = filtered_url.replace(':','%3A')

    const addImage = document.createElement('div')
    addImage.innerHTML= `<a href="${imgUrl}" target="_blank"> <div class="parent content-bg " >
    <div class="d-flex flex-column align-items-center position-relative" >
            <img src="loader.gif" alt="" srcset="" class="position-absolute" width="300px";height="400">   
            <img style="border-radius:10px" class="position-relative" src="https://api.screenshotmachine.com?key=8beab1&url=${filtered_url}&${deviceConfig}&format=png" alt="" ${imgSize};>
            <p>${imgUrl}</p>
        </div>
    </div></a>`
    imageContainer.appendChild(addImage)

    websiteUrlInput.value = '';
}