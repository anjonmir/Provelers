function HiddenGemButton({

    onClick,

}:{

    onClick:()=>void

}){

    return(

        <button
            className="hidden-gem-btn"
            onClick={onClick}
        >

            💎 Discover Hidden Gem

        </button>

    );

}

export default HiddenGemButton;