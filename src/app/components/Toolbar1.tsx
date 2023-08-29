"use client"

function Button({ onClick, children }:any) {
    return (
      <button onClick={onClick}>
        {children}
      </button>
    );
  }
  
  function PlayButton({ movieName }:any) {
    function handlePlayClick() {
      alert(`Playing ${movieName}!`);
    }
  
    return (
      <Button onClick={handlePlayClick}>
        Play "{movieName}"
      </Button>
    );
  }

function UploadButton() {
    return (
      <Button onClick={() => alert('Uploading!')}>
        Upload Image
      </Button>
    );
  }


export default function Toolbar1(){
    return(
        <div>
            <PlayButton movieName="Tarzen"/>
            <UploadButton/>
        </div>
    )
}