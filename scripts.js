/* Reset */
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Poppins', sans-serif; background: #f7f9fc; color: #333; }

/* Header */
header { background: #002d66; color: white; padding: 15px 0; position: fixed; width: 100%; top: 0; z-index: 100; }
header .container { width: 90%; margin: auto; display: flex; justify-content: space-between; align-items: center; }
header nav a { color: white; text-decoration: none; margin: 0 18px; transition: color .3s; }
header nav a:hover { color: #00aeff; }

/* Hero */
.hero { height: 90vh; background: url('../images/hero-bg.jpg') center/cover no-repeat; display: flex; justify-content: center; align-items: center; text-align: center; }
.hero-overlay { background: rgba(0, 0, 0, 0.6); padding: 50px; border-radius: 12px; }
.hero h2 { font-size: 3rem; color: white; margin-bottom: 15px; }
.hero p { font-size: 1.2rem; color: white; margin-bottom: 25px; }
.btn-primary { background: #00aeff; color: white; padding: 14px 30px; border-radius: 8px; font-weight: 600; transition: .3s; }
.btn-primary:hover { background: #008ecc; transform: translateY(-2px); }

/* Sections */
.section { padding: 100px 20px; width: 90%; max-width: 1200px; margin: auto; }
.section-title { font-size: 2.5rem; text-align: center; color: #002d66; margin-bottom: 40px; font-weight: bold; }

/* Grid */
.grid { display: grid; gap: 30px; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); justify-items: center; }

/* Cards base */
.card { background: white; border-radius: 12px; box-shadow: 0 8px 20px rgba(0,0,0,0.1); overflow: hidden; transition: .3s; text-align: center; }
.card img { width: 100%; height: 180px; object-fit: cover; }
.card h3 { margin: 15px 0; font-size: 1.4rem; color: #002d66; }
.card p { margin: 10px 15px; color: #555; font-size: 1rem; }
.card:hover { transform: translateY(-6px); }

/* Partners */
.partners-grid img { width: 100px; opacity: .7; transition: opacity .3s; }
.partners-grid img:hover { opacity: 1; }

/* Form */
.form input, .form textarea { width: 100%; padding: 14px; border-radius: 8px; border: 1px solid #ccc; font-size: 1rem; margin: 10px 0; }
.form button { background: #002d66; color: white; padding: 12px 28px; border-radius: 8px; font-weight: bold; transition: .3s; }
.form button:hover { background: #005bb5; transform: translateY(-2px); }

/* Modal */
.modal { display: none; position: fixed; width: 100%; height: 100%; background: rgba(0,0,0,0.7); justify-content: center; align-items: center; }
.modal-show { display: flex; }
.modal-content { background: white; padding: 30px; border-radius: 10px; text-align: center; }
.modal-close { position: absolute; top: 15px; right: 20px; font-size: 26px; cursor: pointer; }

/* Footer */
.footer { background: #002d66; color: white; text-align: center; padding: 18px 0; margin-top: 40px; }
