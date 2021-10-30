var styleTemp =`  
.clearfix:after {
  content: "";
  display: table;
  clear: both;
}

a {
  color: #5D6975;
  text-decoration: underline;
}

body {
  position: relative;
  width: 21cm;
  margin: 0 auto;
  color: #001028;
  background: #FFFFFF;
  font-family: Arial, sans-serif;
  font-size: 12px;
  font-family: Arial;
}

header {
  padding: 10px 0;
  margin-bottom: 30px;
}

h1 {
  border-top: 1px solid #5D6975;
  border-bottom: 1px solid #5D6975;
  color: #5D6975;
  font-size: 2.4em;
  line-height: 1.4em;
  font-weight: normal;
  text-align: center;
  margin: 0 0 20px 0;
  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAyCAMAAADyWtKhAAAAOVBMVEXu7u7////v7+/x8fHw8PD+/v79/f38/Pz29vb39/fy8vL09PTt7e319fX6+vr5+fn4+Pjz8/P7+/sjQsgnAAABrklEQVR4Xu2Wy2pkMQxET0ny+z77/z92EHRIM4RJejeLeGGMJbkKu1QYt0vVbajkJJWjTw+f/SiSBl40zKsuc5hVDzjVjEtlOB/DR9GFNZ3wUJ1wFmkRVQe0NoFYffQVwGwNDtVgSeUkgdh2acePAM9iZcghDidDG0mPetzgVdXwgJ6ZpeRcOoRjVdXhPipu4E1aYHBJOpeHr1PSBUbiNwdzDNtrbhvQpXbDtm1wN6kDxiXV3XJx1DzBCGMWtQDfx+4QTWVigSVaPS4kqS2IbpwqNySM6g530Yn1gNUkidLOFeCtExmjSypK/KwNenOwdbaCG7msurclLbyorlhVxcmN7VZdBphjZr4/pBJbz/iucm9sd9GedX2LIj12NzNi9uSXueNZEFjyGdvHlPz7jHfO/eQ7+ZIv85Nv3oP97B7eud/nu41/vtt4vttTDwPbYPylhwGbMZ56eNUZX+iMF5296nd+od/5ot93+uKtfrOXPj5VRvAxYhSdL31sBFcWDqUgEvvRZ6RKHkV6aiJhL+I1l+9y7cdeYv+pl/x6ya+X/HoJP/YSXv8afPPX+AONyic1BlYxVgAAAABJRU5ErkJggg==');
}

#project span {
  color: #5D6975;
  text-align: right;
  display: inline-block;
  font-size: 0.8em;
}

#company {
  float: right;
  text-align: right;
}

#project div,
#company div {
  white-space: nowrap;
}

table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  margin-bottom: 20px;
}

table tr:nth-child(2n-1) td {
  background: #F5F5F5;
}

table th {
  padding: 5px 20px;
  color: #5D6975;
  border-bottom: 1px solid #C1CED9;
  white-space: nowrap;
  font-weight: normal;
}

.desc {
  text-align: center;
}

.service {
  text-align: left;
}

table td {
  padding: 20px;
  text-align: right;
}

table td.service,
table td.desc {
  vertical-align: top;
}

.vets span:last-child {
  display: none !important;
}

.prop {
  margin-right: .3rem;
}

.commaSpn {
  margin-right: .2rem ;
}

.service {
  margin-top: .2rem;
}

.price {
  text-align: right;
  margin-top: .2rem;
}
`

module.exports = styleTemp;