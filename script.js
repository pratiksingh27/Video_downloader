const fileInput = document.querySelector("input");
const downloadBtn = document.querySelector("button");

downloadBtn.addEventListener("click", (e)=>{
    e.preventDefault(); //prevent reload
    downloadBtn.innerText = "DownLoading File ...";
    fetchFile(fileInput.value);
});

function fetchFile(url){
    fetch(url).then(res => res.blob()).then(file => {
        let tempUrl=URL.createObjectURL(file);
        let aTag = document.createElement("a");
        aTag.href = tempUrl;
        aTag.download = url.replace(/^.*[\\\/]/, '');
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
        URL.revokeObjectURL(tempUrl);
        downloadBtn.innerText = "DownLoad File";
        // console.log(tempUrl);
    }).catch(()=>{
        downloadBtn.innerText = "DownLoading File ...";
        alert("failed to download file");
    });
}

