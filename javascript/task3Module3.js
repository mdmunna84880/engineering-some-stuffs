/** @format */

class HashMap {
  // Create a store with empty array whenever the object is being created.
  constructor(size = 53) {
    this.store = new Array(size)
  }

  // This function is for converting string into index.
  _hash(key) {
    // Sum of all character code
    let total = 0;
    // Prime number to jumping 31 steps at time to avoid minimal number of collisions
    const WEIR_PRIME = 31;
    // Looping only for 100 for bigger key and for minimal minimal looping
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      // Finding character code at i index and converting that in number like a->1, b-> 2 and so on
      let charCode = key.charCodeAt(i) - 96;
      total = (total * WEIR_PRIME + charCode) % this.store.length;
    }

    // If converting the negative index into positive like A, B and more that character code is less than 96;
    return Math.abs(total);
  }

  // function to set a value at specific hash indexed
  set(key, value) {
    // Get a hashvalue for the key
    const hashValue = this._hash(key);

    if (!this.store[hashValue]) {
      this.store[hashValue] = [];
    }

    const bucket = this.store[hashValue];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        return;
      }
    }

    bucket.push([key, value]);
    return;
  }

  get(key) {
    const hashValue = this._hash(key);
    const bucket = this.store[hashValue];

    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return bucket[i][1];
        }
      }
    } else {
      return null;
    }
  }

  getAll() {
    const allData = [];

    for (let i = 0; i < this.store.length; i++) {
      if (this.store[i]) {
        for (let j = 0; j < this.store[i].length; j++) {
          allData.push({
            key: this.store[i][j][0],
            value: this.store[i][j][1],
          });
        }
      }
    }

    return allData;
  }

  isExist(key) {
    const hashValue = this._hash(key);

    const bucket = this.store[hashValue];
    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return true;
        }
      }
    } else {
      return false;
    }
  }

  remove(key) {
    const hashValue = this._hash(key);
    const bucket = this.store[hashValue];

    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket.splice(i, 1);
          return true;
        }
      }
    } else {
      return false;
    }
  }
}

class Phonebook {
  constructor() {
    this.database = new HashMap();
  }

  addContact(name, phone) {
    if (!name || !phone) {
      console.log("Error: Name and phone are required.");
      return;
    }

    this.database.set(name, phone);
    console.log(`[Success] Added contact: ${name}`);
  }

  viewContacts() {
    const contacts = this.database.getAll();
    console.log("\n--- Phone Book Contacts ---");
    if (contacts.length === 0) {
      console.log("(Phone book is empty)");
    } else {
      contacts.forEach(({ key, value }) => {
        console.log(`Name: ${key} | Phone: ${value}`);
      });
    }
    console.log("---------------------------\n");
  }
  getContactByName(name){
    return this.database.get(name);
  }
  updateContact(name, newPhone) {
    if (this.database.isExist(name)) {
      this.database.set(name, newPhone);
      console.log(`[Success] Updated ${name}'s number to ${newPhone}`);
    } else {
      console.log(`[Error] Contact '${name}' not found. Cannot update.`);
    }
  }

  deleteContact(name) {
    const isDeleted = this.database.remove(name);
    if (isDeleted) {
      console.log(`[Success] Deleted contact: ${name}`);
    } else {
      console.log(`[Error] Contact '${name}' not found.`);
    }
  }
}

const phoneBook = new Phonebook();

phoneBook.addContact("Alice", "7098818394");

// ---------- Random Data Utilities ----------

function randomName() {
  const names = [
    "Alice", "Bob", "Charlie", "David", "Eva",
    "Frank", "Grace", "Hannah", "Ivy", "Jack",
    "Karan", "Liam", "Mia", "Noah", "Olivia"
  ];
  return names[Math.floor(Math.random() * names.length)] + Math.floor(Math.random() * 100);
}

function randomPhone() {
  return Math.floor(1000000000 + Math.random() * 9000000000).toString();
}

// ---------- Generate Random Contacts ----------

console.log("\n📌 Adding random contacts...\n");

for (let i = 0; i < 8; i++) {
  const name = randomName();
  const phone = randomPhone();
  phoneBook.addContact(name, phone);
}

// ---------- View All Contacts ----------

phoneBook.viewContacts();

// ---------- Get One Contact ----------

const testName = phoneBook.database.getAll()[0]?.key;
console.log(`🔍 Fetching contact "${testName}"`);
console.log("Phone:", phoneBook.getContactByName(testName));

// ---------- Update Contact ----------

console.log(`\n✏️ Updating contact "${testName}"`);
phoneBook.updateContact(testName, randomPhone());

// ---------- Verify Update ----------

console.log("Updated Phone:", phoneBook.getContactByName(testName));

// ---------- Delete Contact ----------

console.log(`\n🗑 Deleting contact "${testName}"`);
phoneBook.deleteContact(testName);

// ---------- Verify Deletion ----------

console.log("After deletion:", phoneBook.getContactByName(testName));

// ---------- Final State ----------

phoneBook.viewContacts();

