import { Component, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common'

export class Tool {
  public style: string
}

export class PanelSetting
{
  id: string;
  left: number;
  top: number;
  width: number;
  height: number;
}

export class DefectInfo
{
  id: string;
  x: number;
  y: number;
  type?: string;
  size?: string;
  code?: string;
  panelID?: string;
  dataNo?: number;
  gateNo?: number;
  style?: any;
  shape: string;
  constructor()
  {
  }
}

export class DefectStyle
{
  shape: string;
  color: string;
}

@Component({
  selector: 'app-defect-map',
  templateUrl: './defect-map.component.html',
  styleUrls: ['./defect-map.component.css']
})
export class DefectMapComponent implements OnInit {
  panels: PanelSetting[];
  defects: DefectInfo[];
  defectStyle: any =   {"stroke":"black", "stroke-width":"3", "fill":"red"}
  width: number = 110000
  height: number = 130000
  xMin: number = this.width / 2 * (-1)
  yMin: number = this.height /2 * (-1)
  xMax: number = this.width / 2
  yMax: number = this.height /2
  viewBox: string = `${this.xMin} ${this.yMin} ${this.width} ${this.height}`
  shape: string
  public tools: any
  style: any
  lastclick: number
  //  viewBox: string = `150 150 200 200`
  polygonPoints = `${this.xMin} ${this.yMin} ${this.xMax} ${this.yMax}`
  
  constructor() { 
     this.tools = [{ 'fill': "white", "stroke": "pink", "stroke-width":500, "fill-opacity":0.1, "stroke-opacity":0.9 }, { 'fill': "green"}]
     this.style = {'fill':'red'}
   
  }

  ngOnInit() {
    this.panels = []
    let top = 1500 - 65000
    let left = 1500 - 55000
    for (let i = 0; i <　10; i++)
    {
      left = 1500 - 55000;
      for (let j = 0; j < 10; j++)
      {
        this.panels.push({ id: (i * 10 + j + 1).toString(), width: 9000, height: 11000, left: left, top: top } )
        left = left + 11000 - 150
      }
      top = top + 13000 - 150
    }

    this.defects = [];
    for (let i = 0; i < 1; i++)
    {
       this.defects.push({ 
         id: i.toString(),
         x: 1000,
         y: 1000,
         shape: "circle"
        })
    }
 }

  getGlassLayout() : number[]
  {
    return 
  }
  changeColor(event, i)
  {
    this.lastclick = i
    this.tools[i] = {'fill':"yellow" }
  }
}
