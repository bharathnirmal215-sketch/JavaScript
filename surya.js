<!DOCTYPE html>
<html lang="en">
<head>
    <title>Mezo Pay Split</title>
    <link rel="stylesheet" href="./bootstrap-5.3.7-dist/css/bootstrap.min.css">
    <style>
        body{
            background: linear-gradient(45deg, #51ec97, #235ee7);
        }
        .bg-dark{
            background: linear-gradient(45deg, #f31d1d, #235ee7);
        }
    </style>
</head>
<body>
    
    <nav class="navbar  bg-dark text-center">
            <a href="" class="navbar-brand ">Split and Pay</a>
        
    </nav>

    <section class="container-fluid">
        <h3 class="text-center mt-3">Split with Functionality</h3>
        <div class="row">
            <div class="col-md-6 mt-3">
                <table class="table table-bordered" id="friend_table">
                    
                </table>  
                <button class="btn btn-me btn-warning text-dark" id="add_friend_btn">Add Friend</button>
                <div class="input-group mt-3 d-none" id="add_friend_section">
                    <input type="text" placeholder="Enter Name" id="new_friend_name">
                    <button class="btn btn-me btn-info text-white" id="add_button">Add</button>
                </div>
            </div>
            <div class="col-md-6 mt-3 border d-none bg-white rounded-3" id="split_details">

            </div>
        </div>
    </section>

    <script>

        let addFriendBtn = document.getElementById('add_friend_btn');
        let friendSection = document.getElementById('add_friend_section');
        let splitDetails = document.getElementById('split_details');
        let addBtn = document.getElementById('add_button');
        let friendTable = document.getElementById('friend_table');
        let newFriendName = document.getElementById('new_friend_name');

        let Ram = { fid: 33, fname: 'Lokesh', balance: 1000 };
        let Kesh = { fid: 22, fname: 'Bhuvanesh', balance: 2000};

        let friends = [Ram, Kesh];

        displayfriends(friends);
        function displayfriends(user)
        {
            let eachfriend = '';
            user.forEach(function(friend)
            {
                eachfriend += `
                <tr>
                    <td>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAACUCAMAAACtIJvYAAAAMFBMVEXk5ueutLersbXFyczn6erZ3N2or7Lh4+TS1de2u77Jzc+xt7rc3+DAxMe7wMPW2duTT8BzAAAEJUlEQVR4nO2b27KrIAxABSNyE/7/bw/Y1q1ttQgJOHNcT/ttrwkxBEi77ubm5ubm5ubm5uYGGQh0YyD+1VrmQfAYdD85p5RzU6+H9mbRSAnOOGczPCCUtl1DMei04oJ9wJnTrQIGthf8U+kpJvqxgReAZrtOEWHqxwskP3R6LKSsqwXTT6fZq6/p5I8Xbx0uWytc4BOdZi1fRwt0ulRAVNEC+aVCHYarQs6fjFSdaIE/GamZgVjLZjiFRRxJpcDkWTlSrbTi+UVL063hmUL1hrB0VrlOAUcmdb4o/EFWtWxeqr+gsYK+IFR0CZ9TP1coiupQlFURQZFZoyqTCsEisMqvVUuwBnSpwlyP8B49WFAsRZHvFsGKYW87xV9gREhsq9xuYQ16YpXXhYhBtircA59wZKuhcLt5WiFXrLPHrR0r3NMOyicYwN0KESp7BLmbQSkM6KXhqlYYUv9JrJCy/ZJWDPlEgVRFkVv3rAuiTyvkKyOLY4XcjF6zZ8Dpr7DPXji9KPahHmS5FMGBcERId4N+8sq8Ed2Af7OG0PdRXKzl3WlvrNCdAq5UaiK4kwFZuITYB5ynVmGsaG6RTz92bSF7YyrZdTjFTV8k773rBUlWzVr5myHBPd9CQT9D+EKYnfA0VWHRyltDyoe4mZwKzx35e3iGFMlbyZbTuzQ35E6B8Wyk6J5RV4A1J1I+RKrWpIxK1iJ+nd+iE+uWICzpn4BPWUVuqs05PbXG6Ve4moz2waCOZsM4m6p8e59e3u0NQXIxVZoG++Y1asXezbgwSrcYy1x5dYOcjBCCz4Q/2CSHlqO1i1lQ81L3Wmtv208h/wELrU0eLuNo7TB4LyPeD8NgbbOJ8ig0yH5yShk259MDzplRSrle+7pq4X9Zrx2bFXbLVRRVvRzGKmrQSafiHPuPyv50Y8ppSysGnZ9n7M/BBZ8klRmA7VVaiL7EzDiJX8RCamtzOkobQsQ8qlhYucOdODVizODtRGClQXmZYHN3g/NoMuozbfpvL+aKW0HodGaCH3iJqSheoTahxmnxYlP+GQO8wsqnDy+u875HyB46TvNSOcsINIu39jr9A5RwhCF2ilrmXLjApp+OS7ROvaFgzeokeE3pUkhjAklaKvVbdPWkAonJVSWl1iScZ8fqUinvhvWlfg/WNYjUrHUYLaib6CuOupsKBX2P3Sai+LW0hL2HAsCZVM1k71UaZxQmX+vrh9gu019a36Rw5r5KrL6s4YgyYFWm9TGUX7NP2Oc9WBgjQ8WIt8dNpCnVUt5GocpHc1DYvgRfI6siG6urSK1/oVY4AYPJasQHSker8DB/T1IXyfUI14tVyw7mnWX06CLF6oFY0qq1yRrhX1qX+QLZaiSqeQ+z4dkq17vrSEK9kr21yIbnDh1a4yvx+pmo7i9FiNU/e/A7CWaj8z8AAAAASUVORK5CYII=" height="100px;" alt="">
                    </td>

                    <td class="align-middle">
                        <span class="fs-2 ms-5">${friend.fname}</span>
                        <br>
                        <span class="ms-5 text-danger" id="owing_${friend.fid}">You own ${friend.fname} ₹200</span>
                    </td>

                    <td>
                        <button class="btn btn-danger btn-lg ms-5 mt-4" onclick="SplitBtn(${friend.fid});">Split</button>
                    </td>
                </tr>`  
            })

            friendTable.innerHTML = eachfriend;
        }

        function SplitBtn(id)
        {
            let eachsplit = '';
            splitDetails.classList.remove('d-none');
            friends.forEach(function(friend)
            {
                if(friend.fid === id)
                {
                    eachsplit += `
                    <h3 class="text-center mt-3">Split with ${friend.fname}</h3>
                    <form id="split_form">

                        <input type="text" class="form-control mt-3" placeholder="Enter Total Amount" id="total_amount">
                        <input type="text" class="form-control mt-3" placeholder="Enter Your Expense" id="my_expense">
                        <input type="text" class="form-control mt-3" placeholder="Enter Your Friends Expense" id="friend_expense">
                        
                        <select class="form-control mt-3" id="paid_bill">
                            <option value="">Who Paid the Bill?</option>
                            <option value="arjun">Arjun</option>
                            <option value="${friend.fname.toLowerCase()}">${friend.fname}</option>
                        </select>

                        <div class="text-center">
                            <input type="submit" class="btn btn-me btn-warning mt-3 mb-2" value="Split Bill">
                        </div>

                    </form>`
                }
            })

            splitDetails.innerHTML = eachsplit;

            let friend = friends.find(f => f.fid === id);
            let splitForm = document.getElementById('split_form');

            let totalAmount = document.getElementById('total_amount');
            let myExpense = document.getElementById('my_expense');
            let friendExpense = document.getElementById('friend_expense');

            let paidBill = document.getElementById('paid_bill');
            let oweMoney = document.getElementById(owing_${id});

            splitForm.addEventListener('submit', function(e)
            {
                e.preventDefault();

                let totalamount = Number(totalAmount.value.trim());
                let myexpense = Number(myExpense.value.trim());
                let friendexpense = Number(friendExpense.value.trim());

                let paidbill = paidBill.value.trim().toLowerCase();
                
                if(totalamount == friendexpense + myexpense)
                {
                    if(paidbill == '')
                    {
                        oweMoney.classList.remove('text-danger');
                        oweMoney.classList.add('text-success');
                        oweMoney.textContent = ${friend.fname} owes Me ₹${friendexpense};
                    }
                
                    else if(paidbill == friend.fname.toLowerCase())
                    {
                        oweMoney.classList.remove('text-success');
                        oweMoney.classList.add('text-danger');
                        oweMoney.textContent =` You owe ${friend.fname} ₹${myexpense}`;
                    }
                }

                else 
                    alert('Invalid Split Case !!');
                
                splitDetails.classList.add('d-none');
            })
        }

        addFriendBtn.addEventListener('click', function()
        {
            friendSection.classList.remove('d-none');
            addFriendBtn.classList.add('d-none');
        })

        addBtn.addEventListener('click', function()
        {
            let trimmedName = newFriendName.value.trim();
            if (trimmedName === "") 
                return;

            let presentFriend = friends.find(f => f.fname.toLowerCase() == trimmedName.toLowerCase());
            
            if(presentFriend)
                alert(${trimmedName} Already Exists);
            
            else
            {
                let newFriendObj = { fid: Math.trunc(Math.random() * 100),
                fname: trimmedName, balance: Math.trunc(Math.random() * 10000) };

                friends.push(newFriendObj);
            }      

            newFriendName.value = "";

            friendSection.classList.add('d-none');
            addFriendBtn.classList.remove('d-none');

            displayfriends(friends);
        })
        
    </script>
</body>
</html>15