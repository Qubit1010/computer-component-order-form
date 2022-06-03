const intelCpuHandler = document.querySelector('.intel')
const amdCpuHandler = document.querySelector('.amd')

const intelDataOption = document.querySelector('.intel-option-data')
const amdDataOption = document.querySelector('.amd-option-data')

function amdHideDataOption(){
    amdDataOption.classList.toggle("show");
    intelDataOption.classList.remove("show");
}

function intelHideDataOption(){
    intelDataOption.classList.toggle("show");
    amdDataOption.classList.remove("show");
}




amdCpuHandler.addEventListener("click", amdHideDataOption)
intelCpuHandler.addEventListener("click", intelHideDataOption)
