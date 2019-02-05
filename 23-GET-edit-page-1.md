#### MedioCademy Bootcamp Specialist.

---

## NodeJS Project Shop Online.

### #23 GET Edit Page 1

Setelah kita kopi database dan menggantikannya dengan yang baru sekarang kita akan merubah size image noimage.

Anda buka file views > admin > product.ejs dan update kode dibawah ini dengan memberikan id pada element noimage seperti dibawah ini:

    <td>
      <% if (product.image == ""){ %>
      <img id="noimage" src="/images/noimage.png" alt="">
      <% } else { %>
      <img src="/product_images/<%= product._id %>/<%= product.image %>" alt="product-image">
      <% } %>
    </td>

menjadi:

    <td>
      <% if (product.image == "") { %>
      <img id="noimage" src="/images/noimage.png">
      <% } else {%>
      <img id="noimage" src="/product_images/<%= product._id %>/<%= product.image %>">
      <% }%>
    </td>

Kemudian buka public > CSS > adminstyle.css, tambahkan style sbb:

    #noimage {
      width: 100px;
      height: 100px;
    }

Kemudian refresh localhost:3000/admin/products.

<br>

**Next adalah image upload yang tidak muncul:**
		
		

		

	
	
	
	
	
	

	
	
	
	

<br>

continue next video

<br><br><br><br>

---

Copyright &copy;MedioCademy.com 2018
Dilarang memperbanyak dan mendistribusikan Materi Training ini tanpa ijin dari MedioSoft Corporation. Pelanggaran akan hak cipta dapat ajukan ke Institusi Hukum yang berlaku.
