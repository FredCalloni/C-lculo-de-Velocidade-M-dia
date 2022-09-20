function calcArithmethic() {
    var resultDisplacement = document.getElementById("displacementInput")
    var resultTime = document.getElementById("timeInput")

    var numDisplacement = Number(resultDisplacement.value)
    var numTime = Number(resultTime.value)

    var result = numDisplacement / numTime
    var resultShort = result.toFixed(2)
    document.getElementById("result").innerText = resultShort

    console.log("resultImput" + resultShort)
}

function clean() {
    resultDisplacement = (" ")
    timeInput = (" ")
    var limpH = document.getElementById("displacementInput").value = limpH
    var limpW = document.getElementById("timeInput").value = limpW
    document.getElementById(resultImput).innerHTML = " "
    document.getElementById("result").innerText = ""
}
