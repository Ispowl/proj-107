function recked(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier=ml5.classify("https://teachablemachine.withgoogle.com/models/vUBaTDXDE/model.json",modalReady);
}

function modalReady(){
    classifier.classify(gotResults);
}
function gotResults(results,error){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        randomr = Math.floor(Math.random()*255)+1;
        randomg = Math.floor(Math.random()*255)+1;
        randomb = Math.floor(Math.random()*255)+1;
        document.getElementById("nohear").innerHTML = "I can totally not hear-"+results[0].label;
        document.getElementById("aclol").innerHTML = "Accuracy-"+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("nohear").style.color = "rgb("+randomr+","+randomg+","+randomb+")";
        document.getElementById("aclol").style.color = "rgb("+randomr+","+randomg+","+randomb+")";
        image1 = document.getElementById("ok");
        if(results[0].label == "roar"){
            image1.src("liona.jfif");
        }
        else if(results[0].label == "meow"){
            image1.src("cata-lysm.jfif");
        }
        else if(results[0].label == "borak"){
            image1.src("dogo.jfif");
        }
        else if(results[0].label == "mooooo"){
            image1.src("cow.jfif");
        }
        else{
            image1.src("earar.jfif");
        }
    }
}