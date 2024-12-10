function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6gMzb71MSPH":
        Script1();
        break;
      case "6r46LEpFkPM":
        Script2();
        break;
      case "5fNys4akKur":
        Script3();
        break;
      case "6nkmmUS0Uy2":
        Script4();
        break;
      case "6oKvHawkXlq":
        Script5();
        break;
      case "5vNvLOT0NsV":
        Script6();
        break;
      case "5gXGrJOUT6J":
        Script7();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="musikku.mp3";

audio.load();

audio.play();

audio.volume=0.5;
}

function Script2()
{
  var audio = document.getElementById('bgSongku');
audio.volume = 0.0;
}

function Script3()
{
  var audio = document.getElementById('bgSongku');
audio.volume = 0.2;
}

function Script4()
{
  var audio = document.getElementById('bgSongku');
audio.volume = 0.4;
}

function Script5()
{
  var audio = document.getElementById('bgSongku');
audio.volume = 0.6;
}

function Script6()
{
  var audio = document.getElementById('bgSongku');
audio.volume = 0.8;
}

function Script7()
{
  var audio = document.getElementById('bgSongku');
audio.volume = 1.0;
}

