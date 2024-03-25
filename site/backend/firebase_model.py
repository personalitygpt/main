import firebase_admin
from firebase_admin import db

cred_obj = firebase_admin.credentials.Certificate('./personality-gpt-firebase-adminsdk-iz50i-9d2bcd8d14.json')
default_app = firebase_admin.initialize_app(cred_obj, {
	'databaseURL': "https://personality-gpt-default-rtdb.firebaseio.com/"
	})

ref = db.reference("/")

ref.set({
	"Books":
	{
		"Best_Sellers": -1
	}
})

ref = db.reference("/Books/Best_Sellers")
import json
with open("book_info.json", "r") as f:
	file_contents = json.load(f)

for key, value in file_contents.items():
	ref.push().set(value)

ref = db.reference("/Books/Best_Sellers/")
best_sellers = ref.get()
print(best_sellers)
for key, value in best_sellers.items():
	if(value["Author"] == "J.R.R. Tolkien"):
		value["Price"] = 90
		ref.child(key).update({"Price":80})