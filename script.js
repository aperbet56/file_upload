// Déclaration de la fonction applyDnDFile ayant comme paramètre file
const applyDnDFile = (file) => {
  // Récupération des différents éléments
  const beforeUploadElement = file.querySelector(".before__upload");
  const afterUploadElement = file.querySelector(".after__upload");
  const inputFile = file.querySelector("input");
  const imagePreview = file.querySelector("img");
  const clearBtn = file.querySelector(".clear__btn");

  // Déclaration de la fonction showImagePreview ayant comme paramètre l'image
  const showImagePreview = (img) => {
    if (img) {
      // La méthode statique URL.createObjectURL() crée une chaîne contenant une URL représentant l'objet passé en paramètre.
      // La durée de vie de l'URL est liée au document de la fenêtre depuis laquelle elle a été créée.
      // La nouvelle URL d'objet représente l'objet File ou Blob spécifié.
      const blobUrl = URL.createObjectURL(img);
      imagePreview.src = blobUrl;
      afterUploadElement.style.display = "block";
      beforeUploadElement.style.display = "none";
    }
  };

  // Ecoute de l'événement "click" sur beforeUploadElement
  beforeUploadElement.addEventListener("click", (e) => {
    // Suppression du comportement par défaut
    e.preventDefault();
    // La méthode .click() simule un clic de souris sur un élément.
    inputFile.click();
  });

  // Ecoute de l'événement "change" sur inputFile
  inputFile.addEventListener("change", (e) => {
    // Suppression du comportement par défaut
    e.preventDefault();
    // Appel de la fonction showImagePreview
    showImagePreview(e.target.files[0]);
  });

  // Ecoute de l'événement "click" sur clearBtn
  clearBtn.addEventListener("click", () => {
    afterUploadElement.style.display = "none";
    beforeUploadElement.style.display = "flex";
  });

  // Ecoute de l'événement "dragover" sur beforeUploadElement
  beforeUploadElement.addEventListener("dragover", (e) => {
    // Suppression du comportement par défaut
    e.preventDefault();
    file.classList.add("active");
  });

  // Ecoute de l'événement "dragleave" sur beforeUploadElement
  beforeUploadElement.addEventListener("dragleave", (e) => {
    // Suppression du comportement par défaut
    e.preventDefault();
    file.classList.remove("active");
  });

  // Ecoute de l'événement "drop" sur beforeUploadElement
  beforeUploadElement.addEventListener("drop", (e) => {
    // Suppression du comportement par défaut
    e.preventDefault();
    file.classList.remove("active");
    // Appel de la fonction showImagePreview
    // La propriété DataTransfer.files est une liste de fichier issue d'une manipulation de glisser-déposer. Si l'opération n'inclut pas de fichier, alors la liste est vide.
    showImagePreview(e.dataTransfer.files[0]);
  });
};

// Appel de la fonction applyDnDFile
applyDnDFile(document.querySelector(".file__dnd"));
