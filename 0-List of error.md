#### MedioCademy Bootcamp Specialist.

---

## NodeJS Project Shop Online.

### # List of Error

/> Error upload image

```
null
{ [Error: ENOENT: no such file or directory, open 'public/product_images/5e072c6f12d9cf3d6e5fde11/samsungA20.jpg']
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path:
   'public/product_images/5e072c6f12d9cf3d6e5fde11/samsungA20.jpg' }
null
```



/> Connect database:

```
(node:19312) DeprecationWarning: current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor.
```

**Solution**

Tambahkan optional ```useUnifiedTopology: true```

```
// Connection to database mongodb
mongoose.connect('mongodb://localhost/shop-online-v2', 
{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
 });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	// we're connected!
	console.log('Connected to MongoDB')
});
```
















<br>






















<br><br><br><br>

---
Copyright &copy;MedioSoft 2018 
Dilarang memperbanyak dan mendistribusikan Materi Training ini tanpa ijin dari MedioSoft Corporation. Pelanggaran akan hak cipta dapat ajukan ke Institusi Hukum yang berlaku.