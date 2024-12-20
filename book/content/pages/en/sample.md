# Sample page

Learn how to create content by examples.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel sodales ex. Mauris a diam at leo dictum blandit. Sed fringilla enim at dui blandit, a maximus ante varius. Nam consectetur auctor dolor, quis finibus eros venenatis at. Fusce molestie vel odio aliquam hendrerit. Curabitur blandit a purus at porttitor. Nunc et erat eu odio tempor rhoncus fringilla id nulla. Fusce venenatis justo ac vehicula ornare. Quisque varius tellus id est dictum accumsan. Aenean in pulvinar neque, in luctus leo. Mauris ut ornare leo. Sed vitae ligula cursus, pulvinar eros a, sollicitudin ex.

## Text options

### Typography

Various font types: *italic*, **bold**.

Use VSCode plugin `Markdown` by **Yu Zhang** and `Ctrl+Shift+V` shortcut to easily preview page content.

### Simple list

  * item 1
  * item 2
  * item 3

### Numbered list

  1. item 1
  2. item 2
  3. item 3

### Internal link

[This is a link to an internal page of the book](sample)

### More examples

For more examples (e.g. links), see this [markdown documentation](https://www.markdownguide.org/). Be aware, that the library for parsing Markdown used in this guide might not support all Markdown features.

## Images

### Including images

To include your image, follow these steps:

  1. upload .png or .jpg file to book/content/images
    * filename of the image **MUST NOT** contain underscores (_)
  2. use this TWIG code in your page to add image:

<pre>
![Lenna test image](assets/images/Lenna(testimage).png)
*Lenna test image*
</pre>

### Sample image

![Lenna test image](assets/images/Lenna(testimage).png)
*Lenna test image*

![Lenna test image](assets/images/Lenna-small.png)
*Lenna small test image*

## Step-by-step wizard

### Example

{% include 'components/step-by-step.twig' with {'steps': {
  '1': {
    'title': 'Go to the Login Page',
    'description': 'Visit the [login page](https://www.ceremonycrm.com/login).',
    'example': 'this is example',
  },
  '2': {
    'title': 'Enter your username and password',
    'description': '',
    'example': markdown('
![Ceremony CRM Login zoomed](../assets/images/Login_zoomed.png)
*Ceremony CRM Login zoomed*
    ')
  }
}} %}

## Tables

### Example
... to be done ...

page: {{ data.page }}

## Heading 2

This is a sample paragraph.

[Sample - without sidebar](subfolder/sample-without-sidebar)

RAND: {{ data.randVar }}

{{ bookRootUrl }}

![Lenna test image](./assets/images/Lenna(testimage).png)
*Lenna test image*
