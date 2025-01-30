$(document).ready(function () {
  // Fetch and display AJAX content
  $.ajax({
    url: "http://numbersapi.com/1/30/date?json",
    method: "GET",
    success: function (data) {
      $("#ajax-content").text(data.text);
    },
  });

  // Drag & Drop file upload
  const uploadArea = $("#upload-area");
  const fileInput = $("#file-input");

  fileInput.on("change", function (event) {
    uploadFiles(event.target.files);
  });

  uploadArea.on("click", function (event) {
    fileInput.click();
  });

  uploadArea.on("dragover", function (event) {
    event.preventDefault();
    uploadArea.addClass("hover");
  });

  uploadArea.on("dragleave", function () {
    uploadArea.removeClass("hover");
  });

  uploadArea.on("drop", function (event) {
    event.preventDefault();
    uploadFiles(event.originalEvent.dataTransfer.files);
  });

  function uploadFiles(files) {
    const formData = new FormData();
    for (const file of files) {
      formData.append("files", file);
    }

    $.ajax({
      url: "/upload",
      method: "POST",
      data: formData,
      processData: false,
      contentType: false,
      success: function () {
        alert("Files uploaded successfully!");
      },
    });
  }
  // Enhanced animations
  function animateOnScroll() {
    $(".feature-card").each(function () {
      const cardPosition = $(this).offset().top;
      const scrollPosition = $(window).scrollTop() + $(window).height() - 100;

      if (scrollPosition > cardPosition) {
        $(this).addClass("animate__animated animate__fadeInUp");
      }
    });
  }

  // Smooth scroll animation
  $('a[href^="#"]').on("click", function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top - 70,
      },
      800
    );
  });

  // Enhance hover effects
  $(".feature-card").hover(
    function () {
      $(this).find(".card-img-top").css("transform", "scale(1.1)");
    },
    function () {
      $(this).find(".card-img-top").css("transform", "scale(1)");
    }
  );

  function animateStats() {
    $(".stats-card").each(function () {
      const card = $(this);
      const cardPosition = card.offset().top;
      const scrollPosition = $(window).scrollTop() + $(window).height() - 100;

      if (scrollPosition > cardPosition && !card.hasClass("animated")) {
        const animation = card.data("animation");
        const delay = card.data("delay") || 0;

        setTimeout(() => {
          card.addClass(animation + " animated");
        }, delay);
      }
    });
  }

  // Initial check for animations
  animateOnScroll();

  // Animate elements on scroll
  $(window).scroll(function () {
    animateOnScroll();
    animateStats();
  });
});
