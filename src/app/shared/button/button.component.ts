import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-button',
  imports: [NgIf],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Output() action = new EventEmitter<void>();
  @Input() label: string = 'Click';
  @Input() icon: string | null = null;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled: boolean = false;
  @Input() styleClass: string = 'bg-blue-500 hover:bg-blue-600 text-white';

  onClick(): void {
    if (!this.disabled) {
      this.action.emit();
    }
  }
}
