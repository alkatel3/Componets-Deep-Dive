import { AfterContentInit, afterNextRender, afterRender, Component, contentChild, ContentChild, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent implements AfterContentInit {
  // @HostBinding('class') className ='control'
  // @HostListener('click') onClick() {
  //   console.log('Clicked')
  // }

  lable = input.required<string>()

  // @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTemplateElement>

  private control = contentChild<ElementRef<HTMLInputElement | HTMLTemplateElement>>('input')

  private el = inject(ElementRef)

  constructor(){
    afterRender(()=>{
      console.log('afterRender')
    });
    afterNextRender(()=>{
      console.log('afterNextRender')
    })
  }

  onClick() {
    console.log('Clicked')
    console.log(this.el)
  }

  ngAfterContentInit(): void {
    console.log('AfterContentInit')
  }
}
