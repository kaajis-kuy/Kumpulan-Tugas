var introduce = {
    perkenalkan : function() {
        console.log("nama saya " + " " + this.nama, "umur saya" + " " + this.umur + " " +"tahun,", "alamat saya" + " " + this.alamat,"dan saya punya hobby" + " " + this.hobby);

    }   
}

var data = Object.create(introduce);
data.nama = "Agus,"
data.umur = 30
data.alamat = "Jln, Malioboro, Yogyakarta,"
data.hobby = "Gaming!"
data.perkenalkan() 