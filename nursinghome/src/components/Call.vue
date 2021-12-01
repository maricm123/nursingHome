<template>
    <div id="mybutton">
    <p><a href="tel:+381643289837"><i class="fa fa-phone"></i></a></p>
    </div>
</template>

<style scoped>
@media screen and (min-width:800px) {
    .fa-phone {
    display: none;
    }

    #mybutton {
    display: none;
    }
}

@media screen and (max-width:800px) {
    .fa-phone {
    background-color: rgb(0, 0, 255);
    color: rgb(255, 255, 255);
    padding: 15px 15px;
    border-radius: 60%;
    cursor: pointer;
    }

    #mybutton {
    position: fixed;
    bottom: 10px;
    right: 10px;
    }

    
}


</style>