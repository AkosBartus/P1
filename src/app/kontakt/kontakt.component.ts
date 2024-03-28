import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss']
})
export class KontaktComponent implements OnInit {

  form: FormGroup = this.fb.group({
    from_name: ['', Validators.required],
    to_name: ['Eva/Mathias'],
    from_email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', Validators.required]
  })

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  async send() {
    if (this.form.valid) {
      emailjs.init('Jvn_6OO7VUaNdWtxK');
      try {
        let response = await emailjs.send("service_344m05q","template_mhlkm6h",{
          from_name: this.form.value.from_name,
          to_name: this.form.value.to_name,
          from_email: this.form.value.from_email,
          subject: this.form.value.subject,
          message: this.form.value.message,
        });

        alert('Message has been sent.');
        this.form.reset();
      } catch (error) {
        console.error('Error sending message:', error);
        alert('An error occurred while sending the message. Please try again later.');
      }
    } else {
      alert('Please fill out all required fields correctly.');
    }
  }
}
