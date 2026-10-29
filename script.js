const registrationForm = document.getElementById("registrationFGorm");
if(registrationForm) {
    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name=document.getElementById("fullname").Value.trim();
        const email=document.getElementById("email").Value.trim();
        const phone=document.getElementById("phone").Value.trim();
        const password=document.getElementById("password").Value;
        const confirmPassword=document.getElementById("confirmPassword").Value;
        const message=document.getElementById("formMessage");

        if(name.length < 2) {
            message.textContent = "Please enter your full name.";
            message.className="text-danger mb-3";
            return;
        }

        if(!registrationForm.checkValidity()) {
            registrationForm.reportValidity();
            return;
        }

        if (password.length < 8) {
            message.textContent="Password must contain at least 8 characters.";
            message.className="text-danger mb-3";
            return;
        }

        if(password !== confirmPassword){
            message.testContent="Passwords do not match.";
            message.className="text-danger mb-3";
            return;
        }

        message.textContent="Registration for,m validated successfully!";
        message.className="text-success mb-3";
        console.log("Registration validated for:",name, email, phone);
    });
}
const galleryImage=document.getElementById("galleryImage");
if(galleryImage){
    const image=["C:\Users\TekSol.shop\OneDrive\Pictures\CSS+HTML\Screenshot_20261018_012648_ChatGPT (1).jpg",
        "C:\Users\TekSol.shop\OneDrive\Pictures\CSS+HTML\Screenshot_20261018_012641_ChatGPT (1).jpg"
        "C:\Users\TekSol.shop\OneDrive\Pictures\CSS+HTML\Screenshot_20261018_012704_ChatGPT (1) (1).jpg"
    ];
    let currentImage=0;
    function showImage() {
        galleryImage.src= image[currentImage];
        const preview=document.getElementById("previewImage");
        preview.src=image[currentImage];
        preview.alt="Tourism attraction" + (currentImage + 1);
    }
    document.getElementById("nextButton").addEventListeners("click", function (){
        currentImage=(currentImage + 1) % image.length;
    });

    document.getElementById("previousButton").addEventListeners("click", function (){
        currentImage=(currentImage - 1 image.length) % image.length;
        showImage();
    });
}