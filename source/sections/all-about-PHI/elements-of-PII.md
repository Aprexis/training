Protection and privacy come into play once the individual has been uniquely identified. [There are after all 25.8 million Americans who have diabetes](http://ndep.nih.gov/diabetes-facts/). Which leads to the question of what data can be used to uniquely identify an individual. The generally accepted set of individually unique data elements include the [following](http://www.oshpd.ca.gov/Boards/CPHS/HIPAAIdentifiers.pdf):

<style type="text/css">.tftable {font-size:12px;color:#333333; width:100%;border-width: 1px;border-color: #729ea5;border-collapse: collapse;}
.tftable th {font-size:12px;background-color:#acc8cc;border-width: 1px;padding: 8px;border-style: solid;border-color: #729ea5;text-align:left;}
.tftable tr {background-color:#ffffff;}
.tftable td {font-size:12px;border-width: 1px;padding: 8px;border-style: solid;border-color: #729ea5;}
</style>
<table border="1" class="tftable">
	<tbody>
		<tr>
			<th>ID</th>
			<th>Data Element</th>
			<th>Description</th>
		</tr>
	</tbody>
	<tbody>
		<tr>
			<td>1</td>
			<td width="250px">Name</td>
			<td>Well, of course i.e. first name, last name, maiden name combinations. One could argue that just any <strong>one</strong> of the above doesn&#39;t uniquely identify an individual after all &quot;James&quot; is a pretty common name. But it could be possible to identify an individual using a combination of data i.e. first name, zipcode, street address etc.</td>
		</tr>
		<tr>
			<td>2</td>
			<td>Geographic locators</td>
			<td>Everything (street address, city, precinct, zipcode, lat long coordinates etc.) are considered PII. The first three digits of the zipcode are usually considered ok for use except in the case of certain zipcodes which cover a small population (less than 20,000). There are currently 17 zipcodes that fit that profile - 036, 692, 878, 059, 790, 879, 063, 821, 884, 102, 823, 890, 203, 830, 893, 556, 831. So three digit zipcodes are ok to be used except for the above listed ones.</td>
		</tr>
		<tr>
			<td>3</td>
			<td>Dates</td>
			<td>Pertaining to significant events in an individual&#39;s life - birth, death, marriage, admission, discharge etc. Just the year is generally considered fine for use except in the case of the very elderly (&gt;89 years of age; in which case they would be represented by an aggregate category e.g. =&gt;90 )</td>
		</tr>
		<tr>
			<td>4</td>
			<td>Phone numbers</td>
			<td>Well, of course.</td>
		</tr>
		<tr>
			<td>5</td>
			<td>Fax numbers</td>
			<td>This is, IMHO, a carryover from the old days. Do you know a lot of people with a personal fax number? But, it does make sense.</td>
		</tr>
		<tr>
			<td>6</td>
			<td>Electronic mail addresses (email)</td>
			<td>Check</td>
		</tr>
		<tr>
			<td>7</td>
			<td>Social Security numbers</td>
			<td>Check</td>
		</tr>
		<tr>
			<td>8</td>
			<td>Medical record numbers</td>
			<td>This is usually a &quot;random&quot; number and could be used if one also knew the institution that assigned it.</td>
		</tr>
		<tr>
			<td>9</td>
			<td>Health plan beneficiary numbers</td>
			<td>This is your insurance card / member ID.</td>
		</tr>
		<tr>
			<td>10</td>
			<td>Account numbers</td>
			<td>Bank numbers etc.</td>
		</tr>
		<tr>
			<td>11</td>
			<td>Certificate/license numbers</td>
			<td>Drivers license, birth certificate number etc.</td>
		</tr>
		<tr>
			<td>12</td>
			<td>Vehicle identifiers and serial numbers, including license plate numbers</td>
			<td>If it&#39;s good enough for the police to track someone down...</td>
		</tr>
		<tr>
			<td>13</td>
			<td>Device identifiers and serial numbers</td>
			<td>Medical devices have unique serial numbers. Your computer&#39;s MAC id is unique as well.</td>
		</tr>
		<tr>
			<td>14</td>
			<td>Web Universal Resource Locators (URLs)</td>
			<td>This is a bit murky but is in here to cover all possibilities. <a href="http://www.facebook.com" rel="nofollow">http://www.facebook.com</a> isn&#39;t very unique. But if logged within a specific application, could indeed be very unique to an individual.</td>
		</tr>
		<tr>
			<td>15</td>
			<td>Internet Protocol (IP) address numbers</td>
			<td>Your IP address can be used to easily identify your address. There are several free services that offer this (do a quick google search for <a href="https://www.google.com/search?q=address+from+ip&amp;oq=address" rel="nofollow">address from ip</a> and try this as an <a href="http://geobytes.com/get-city-details-api/" rel="nofollow">example</a></td>
		</tr>
		<tr>
			<td>16</td>
			<td>Biometric identifiers, including finger and voice prints</td>
			<td>Don&#39;t forget retinal images.</td>
		</tr>
		<tr>
			<td>17</td>
			<td>Full face photographic images and any comparable images</td>
			<td>Check</td>
		</tr>
		<tr>
			<td>18</td>
			<td>Any other unique identifying number, characteristic, or code</td>
			<td>Re code - note this does not mean the unique code assigned by the system to code the data.</td>
		</tr>
	</tbody>
</table>

These 18 elements are the core set of data elements that individually or in combination can be used to uniquely identify an individual. And, considering the fact that the above list of identifiers has **fax numbers** and not Twitter @usernames, Facebook IDs, or a host of other modern, more common identifiers, it's clear that the PII list is not the most up to date and some more thought should go into recognizing and protecting identifiable information. However, since patient data is valuable in clinical trials, medical case studies etc., the above list is used as a guideline to ensure privacy.
