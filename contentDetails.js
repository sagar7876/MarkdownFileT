function dynamicContentDetails(ob) {
    let mainContainer = document.createElement('div');
    mainContainer.id = 'containerD';
    document.getElementById('containerProduct').appendChild(mainContainer);

    let imageSectionDiv = document.createElement('div');
    imageSectionDiv.id = 'imageSection';

    let imgTag = document.createElement('img');
    imgTag.id = 'imgDetails';
    imgTag.src = ob.preview;

    imageSectionDiv.appendChild(imgTag);

    let productDetailsDiv = document.createElement('div');
    productDetailsDiv.id = 'productDetails';

    let h1 = document.createElement('h1');
    let h1Text = document.createTextNode(ob.name);
    h1.appendChild(h1Text);

    let h4 = document.createElement('h4');
    let h4Text = document.createTextNode(ob.brand);
    h4.appendChild(h4Text);

    let detailsDiv = document.createElement('div');
    detailsDiv.id = 'details';

    let h3DetailsDiv = document.createElement('h3');
    let h3DetailsText = document.createTextNode('Rs ' + ob.price);
    h3DetailsDiv.appendChild(h3DetailsText);

    let h3 = document.createElement('h3');
    let h3Text = document.createTextNode('Description');
    h3.appendChild(h3Text);

    let para = document.createElement('p');
    let paraText = document.createTextNode(ob.description);
    para.appendChild(paraText);

    let productPreviewDiv = document.createElement('div');
    productPreviewDiv.id = 'productPreview';

    let h3ProductPreviewDiv = document.createElement('h3');
    let h3ProductPreviewText = document.createTextNode('Product Preview');
    h3ProductPreviewDiv.appendChild(h3ProductPreviewText);
    productPreviewDiv.appendChild(h3ProductPreviewDiv);

    ob.photos.forEach(photo => {
        let imgTagProductPreviewDiv = document.createElement('img');
        imgTagProductPreviewDiv.id = 'previewImg';
        imgTagProductPreviewDiv.src = photo;
        imgTagProductPreviewDiv.onclick = function () {
            imgTag.src = this.src;
        };
        productPreviewDiv.appendChild(imgTagProductPreviewDiv);
    });

    let quantityDiv = document.createElement('div');
    quantityDiv.id = 'quantityDiv';

    let minusButton = document.createElement('button');
    minusButton.id = 'minusButton';
    minusButton.innerText = '-';
    minusButton.onclick = function () {
        let quantity = parseInt(document.getElementById('quantity').innerText);
        if (quantity > 1) {
            document.getElementById('quantity').innerText = quantity - 1;
        }
    };

    let quantityText = document.createElement('span');
    quantityText.id = 'quantity';
    quantityText.innerText = '1';

    let plusButton = document.createElement('button');
    plusButton.id = 'plusButton';
    plusButton.innerText = '+';
    plusButton.onclick = function () {
        let quantity = parseInt(document.getElementById('quantity').innerText);
        document.getElementById('quantity').innerText = quantity + 1;
    };

    quantityDiv.appendChild(minusButton);
    quantityDiv.appendChild(quantityText);
    quantityDiv.appendChild(plusButton);

    let buttonDiv = document.createElement('div');
    buttonDiv.id = 'button';

    let buttonTag = document.createElement('button');
    buttonTag.innerText = 'Continue to Checkout';
    buttonTag.onclick = function () {
        let quantity = document.getElementById('quantity').innerText;
        let order = id + " " + quantity;
        let counter = parseInt(quantity);
        if (document.cookie.indexOf(',counter=') >= 0) {
            order = id + " " + document.cookie.split(',')[0].split('=')[1];
            counter += Number(document.cookie.split(',')[1].split('=')[1]);
        }
        document.cookie = "orderId=" + order + ",counter=" + counter;
        document.getElementById("badge").innerText = counter;
        console.log(document.cookie);
    };
    buttonDiv.appendChild(buttonTag);

    mainContainer.appendChild(imageSectionDiv);
    mainContainer.appendChild(productDetailsDiv);
    productDetailsDiv.appendChild(h1);
    productDetailsDiv.appendChild(h4);
    productDetailsDiv.appendChild(detailsDiv);
    detailsDiv.appendChild(h3DetailsDiv);
    detailsDiv.appendChild(h3);
    detailsDiv.appendChild(para);
    productDetailsDiv.appendChild(productPreviewDiv);
    productDetailsDiv.appendChild(quantityDiv);
    productDetailsDiv.appendChild(buttonDiv);

    return mainContainer;
}
