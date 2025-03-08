document.addEventListener('DOMContentLoaded', () => {
    // Lấy tất cả các trái tim và chi tiết
    const hearts = document.querySelectorAll('.heart');
    const leftHeart = document.querySelector('.heart-left');
    const centerHeart = document.querySelector('.heart-center');
    const rightHeart = document.querySelector('.heart-right');
    
    const heartContainers = document.querySelectorAll('.heart-container');
    const leftHeartContainer = document.querySelector('.heart-container-left');
    const centerHeartContainer = document.querySelector('.heart-container-center');
    const rightHeartContainer = document.querySelector('.heart-container-right');
    
    // Điều khiển số lượng trái tim
    const heartCountBtns = document.querySelectorAll('.heart-count-btn');
    const heartCount1Btn = document.getElementById('heart-count-1');
    const heartCount2Btn = document.getElementById('heart-count-2');
    const heartCount3Btn = document.getElementById('heart-count-3');
    
    const container = document.querySelector('.container');
    const arms = document.querySelectorAll('.arm');
    const legs = document.querySelectorAll('.leg');
    const mouths = document.querySelectorAll('.mouth');
    const leftEyes = document.querySelectorAll('.left-eye');
    const rightEyes = document.querySelectorAll('.right-eye');
    const floor = document.querySelector('.floor');
    const stage = document.querySelector('.stage');
    
    // Lấy các nút điều khiển kiểu nhảy
    const danceNormalBtn = document.getElementById('dance-normal');
    const danceHipHopBtn = document.getElementById('dance-hip-hop');
    const danceBalletBtn = document.getElementById('dance-ballet');
    const danceSalsaBtn = document.getElementById('dance-salsa');
    const danceSpinBtn = document.getElementById('dance-spin');
    const danceBackflipBtn = document.getElementById('dance-backflip');
    const danceMoonwalkBtn = document.getElementById('dance-moonwalk');
    const danceBreakdanceBtn = document.getElementById('dance-breakdance');
    
    // Mảng các nút để dễ quản lý
    const danceButtons = [
        danceNormalBtn, 
        danceHipHopBtn, 
        danceBalletBtn, 
        danceSalsaBtn,
        danceSpinBtn,
        danceBackflipBtn,
        danceMoonwalkBtn,
        danceBreakdanceBtn
    ];
    
    // Kiểu nhảy hiện tại
    let currentDanceStyle = 'normal';
    let isGrooving = false;
    
    // Thêm hiệu ứng biểu cảm ngẫu nhiên cho khuôn mặt
    function randomExpression() {
        if (isGrooving) return; // Không đổi biểu cảm khi đang nhảy mạnh
        
        // Thay đổi miệng ngẫu nhiên với nhiều biểu cảm dễ thương
        const mouthExpressions = [
            'border-bottom: 5px solid #000; border-radius: 0 0 20px 20px; height: 20px; border-top: none;', // Cười
            'border: 5px solid #000; border-radius: 50%; height: 15px; width: 15px; left: 42px;', // Ngạc nhiên
            'border-bottom: 5px solid #000; border-radius: 0 0 5px 5px; height: 5px; width: 30px; left: 35px;', // Nghiêm túc
            'border-bottom: 5px solid #000; border-radius: 0 0 30px 30px; height: 25px; width: 45px; left: 27px;', // Cười rộng
            'border-bottom: 5px solid #000; width: 20px; height: 10px; left: 40px; transform: rotate(10deg);', // Cười nửa miệng
            'border-bottom: 5px solid #000; border-left: 5px solid #000; border-radius: 0 0 0 10px; height: 15px; width: 15px; left: 42px;' // Gương mặt ngố
        ];
        
        // Biểu cảm đặc biệt cho các kiểu nhảy khác nhau
        let mouthIndex = Math.floor(Math.random() * mouthExpressions.length);
        
        // Biểu cảm đặc biệt cho các kiểu nhảy nâng cao
        if (currentDanceStyle === 'spin') {
            // Biểu cảm choáng váng khi xoay
            mouthIndex = Math.random() > 0.5 ? 1 : 5; // Ngạc nhiên hoặc ngố
        } else if (currentDanceStyle === 'backflip') {
            // Biểu cảm tập trung khi lộn ngược
            mouthIndex = Math.random() > 0.5 ? 2 : 1; // Nghiêm túc hoặc ngạc nhiên
        } else if (currentDanceStyle === 'breakdance') {
            // Biểu cảm cool khi breakdance
            mouthIndex = 4; // Cười nửa miệng (cool)
        }
        
        const randomMouth = mouthExpressions[mouthIndex];
        
        // Áp dụng biểu cảm cho các trái tim
        mouths.forEach((mouth, index) => {
            // Thỉnh thoảng có biểu cảm riêng cho từng trái tim
            if (Math.random() > 0.7) {
                const uniqueIndex = Math.floor(Math.random() * mouthExpressions.length);
                mouth.style.cssText = mouthExpressions[uniqueIndex];
            } else {
                mouth.style.cssText = randomMouth;
            }
            
            // Chớp mắt tự nhiên và chuyển động mắt (riêng cho từng trái tim)
            setTimeout(() => {
                leftEyes[index].style.transform = 'scaleY(0.1)';
                rightEyes[index].style.transform = 'scaleY(0.1)';
                
                setTimeout(() => {
                    leftEyes[index].style.transform = 'scaleY(1)';  
                    rightEyes[index].style.transform = 'scaleY(1)';
                    
                    // Thỉnh thoảng làm mắt to ra để trông dễ thương hơn
                    if (Math.random() > 0.7) {
                        leftEyes[index].style.width = '22px';
                        leftEyes[index].style.height = '22px';
                        rightEyes[index].style.width = '22px';
                        rightEyes[index].style.height = '22px';
                        
                        setTimeout(() => {
                            leftEyes[index].style.width = '20px';
                            leftEyes[index].style.height = '20px';
                            rightEyes[index].style.width = '20px';
                            rightEyes[index].style.height = '20px';
                        }, 300);
                    }
                }, 100);
            }, Math.random() * 5000 + 2000);
        });
    }
    
    // Gọi hàm biểu cảm ngẫu nhiên mỗi 3-6 giây
    setInterval(randomExpression, Math.random() * 3000 + 3000);
    
    // Hàm chuyển đổi kiểu nhảy
    function changeDanceStyle(style) {
        if (isGrooving) return; // Không đổi kiểu khi đang nhảy mạnh
        
        // Ẩn sàn nhảy nếu chuyển sang kiểu khác moonwalk
        if (currentDanceStyle === 'moonwalk' && style !== 'moonwalk') {
            floor.style.animation = 'floor-hide 0.5s forwards';
            floor.style.backgroundPosition = '0 0';
        }
        
        // Xóa tất cả class cho stage
        stage.classList.remove('normal-mode', 'hip-hop-mode', 'ballet-mode', 'salsa-mode', 'spin-mode', 'backflip-mode', 'moonwalk-mode', 'breakdance-mode');
        
        // Thêm class mới cho kiểu nhảy hiện tại
        stage.classList.add(`${style}-mode`);
        
        currentDanceStyle = style;
        
        // Reset các style
        hearts.forEach(heart => {
            heart.style.backgroundColor = '';
        });
        
        document.querySelectorAll('.arm, .leg').forEach(el => {
            el.style.backgroundColor = '';
        });
        
        // Cập nhật trạng thái nút
        danceButtons.forEach(btn => btn.classList.remove('active'));
        
        // Điều chỉnh ánh sáng sân khấu theo kiểu nhảy
        adjustStageLighting(style);
        
        // Đặt animation cho các trái tim
        switch(style) {
            case 'hip-hop':
                danceHipHopBtn.classList.add('active');
                
                heartContainers.forEach((container, index) => {
                    const delay = index * 0.2;
                    container.style.animation = `hip-hop 1.5s infinite ${delay}s`;
                });
                
                arms.forEach(arm => {
                    if (arm.classList.contains('left-arm')) {
                        arm.style.animation = 'hip-left-arm 1.5s infinite';
                    } else {
                        arm.style.animation = 'hip-right-arm 1.5s infinite';
                    }
                });
                
                legs.forEach(leg => {
                    if (leg.classList.contains('left-leg')) {
                        leg.style.animation = 'hip-left-leg 1.5s infinite';
                    } else {
                        leg.style.animation = 'hip-right-leg 1.5s infinite';
                    }
                });
                break;
                
            case 'ballet':
                danceBalletBtn.classList.add('active');
                
                heartContainers.forEach((container, index) => {
                    const delay = index * 0.2;
                    container.style.animation = `ballet 2s infinite ${delay}s`;
                });
                
                arms.forEach(arm => {
                    if (arm.classList.contains('left-arm')) {
                        arm.style.animation = 'ballet-left-arm 2s infinite';
                    } else {
                        arm.style.animation = 'ballet-right-arm 2s infinite';
                    }
                });
                
                legs.forEach(leg => {
                    if (leg.classList.contains('left-leg')) {
                        leg.style.animation = 'ballet-left-leg 2s infinite';
                    } else {
                        leg.style.animation = 'ballet-right-leg 2s infinite';
                    }
                });
                
                // Khiến trái tim trông duyên dáng hơn khi nhảy ballet
                mouths.forEach(mouth => {
                    mouth.style.cssText = 'border-bottom: 5px solid #000; border-radius: 0 0 20px 20px; height: 15px; width: 35px; left: 32px;';
                });
                break;
                
            case 'salsa':
                danceSalsaBtn.classList.add('active');
                
                heartContainers.forEach((container, index) => {
                    const delay = index * 0.15;
                    container.style.animation = `salsa 1.2s infinite ${delay}s`;
                });
                
                arms.forEach(arm => {
                    if (arm.classList.contains('left-arm')) {
                        arm.style.animation = 'salsa-left-arm 1.2s infinite';
                    } else {
                        arm.style.animation = 'salsa-right-arm 1.2s infinite';
                    }
                });
                
                legs.forEach(leg => {
                    if (leg.classList.contains('left-leg')) {
                        leg.style.animation = 'salsa-left-leg 1.2s infinite';
                    } else {
                        leg.style.animation = 'salsa-right-leg 1.2s infinite';
                    }
                });
                
                // Biểu cảm vui nhộn cho salsa
                mouths.forEach(mouth => {
                    mouth.style.cssText = 'border-bottom: 5px solid #000; border-radius: 0 0 30px 30px; height: 25px; width: 40px; left: 30px;';
                });
                break;
            
            case 'spin':
                danceSpinBtn.classList.add('active');
                
                heartContainers.forEach((container, index) => {
                    const delay = index * 0.3;
                    container.style.animation = `spin 2.5s infinite ${delay}s`;
                });
                
                arms.forEach(arm => {
                    if (arm.classList.contains('left-arm')) {
                        arm.style.animation = 'spin-left-arm 2.5s infinite';
                    } else {
                        arm.style.animation = 'spin-right-arm 2.5s infinite';
                    }
                });
                
                legs.forEach(leg => {
                    if (leg.classList.contains('left-leg')) {
                        leg.style.animation = 'spin-left-leg 2.5s infinite';
                    } else {
                        leg.style.animation = 'spin-right-leg 2.5s infinite';
                    }
                });
                
                // Biểu cảm mặt khi xoay vòng
                mouths.forEach(mouth => {
                    mouth.style.cssText = 'border: 5px solid #000; border-radius: 50%; height: 15px; width: 15px; left: 42px;';
                });
                break;
                
            case 'backflip':
                danceBackflipBtn.classList.add('active');
                
                heartContainers.forEach((container, index) => {
                    const delay = index * 0.3;
                    container.style.animation = `backflip 2s infinite ${delay}s`;
                });
                
                arms.forEach(arm => {
                    if (arm.classList.contains('left-arm')) {
                        arm.style.animation = 'backflip-left-arm 2s infinite';
                    } else {
                        arm.style.animation = 'backflip-right-arm 2s infinite';
                    }
                });
                
                legs.forEach(leg => {
                    leg.style.animation = 'backflip-legs 2s infinite';
                });
                
                // Biểu cảm tập trung khi lộn ngược
                mouths.forEach(mouth => {
                    mouth.style.cssText = 'border-bottom: 5px solid #000; border-radius: 0 0 5px 5px; height: 5px; width: 30px; left: 35px;';
                });
                break;
                
            case 'moonwalk':
                danceMoonwalkBtn.classList.add('active');
                
                heartContainers.forEach((container, index) => {
                    const delay = index * 0.5;
                    container.style.animation = `moonwalk 4s linear infinite ${delay}s`;
                });
                
                arms.forEach(arm => {
                    if (arm.classList.contains('left-arm')) {
                        arm.style.animation = 'moonwalk-left-arm 2s infinite';
                    } else {
                        arm.style.animation = 'moonwalk-right-arm 2s infinite';
                    }
                });
                
                legs.forEach(leg => {
                    if (leg.classList.contains('left-leg')) {
                        leg.style.animation = 'moonwalk-left-leg 2s infinite';
                    } else {
                        leg.style.animation = 'moonwalk-right-leg 2s infinite';
                    }
                });
                
                // Biểu cảm cool khi moonwalk - giống Michael Jackson
                mouths.forEach(mouth => {
                    mouth.style.cssText = 'border-bottom: 5px solid #000; width: 20px; height: 10px; left: 40px; transform: rotate(7deg);';
                });
                
                // Hiển thị và animate sàn nhảy
                floor.style.animation = 'floor-show 0.5s forwards';
                setTimeout(() => {
                    floor.style.animation = 'floor-move 1s linear infinite';
                }, 500);
                break;
                
            case 'breakdance':
                danceBreakdanceBtn.classList.add('active');
                
                heartContainers.forEach((container, index) => {
                    const delay = index * 0.3;
                    container.style.animation = `breakdance 3s infinite ${delay}s`;
                });
                
                arms.forEach(arm => {
                    if (arm.classList.contains('left-arm')) {
                        arm.style.animation = 'breakdance-left-arm 3s infinite';
                    } else {
                        arm.style.animation = 'breakdance-right-arm 3s infinite';
                    }
                });
                
                legs.forEach(leg => {
                    if (leg.classList.contains('left-leg')) {
                        leg.style.animation = 'breakdance-left-leg 3s infinite';
                    } else {
                        leg.style.animation = 'breakdance-right-leg 3s infinite';
                    }
                });
                
                // Biểu cảm "cool" cho breakdance
                mouths.forEach(mouth => {
                    mouth.style.cssText = 'border-bottom: 5px solid #000; width: 20px; height: 10px; left: 40px; transform: rotate(-10deg);';
                });
                break;
                
            default: // Normal
                danceNormalBtn.classList.add('active');
                
                heartContainers.forEach((container, index) => {
                    let delay = 0;
                    if (container.classList.contains('heart-container-left')) {
                        delay = 0.2;
                    } else if (container.classList.contains('heart-container-right')) {
                        delay = 0.4;
                    }
                    container.style.animation = `dance 1.5s infinite ${delay}s`;
                });
                
                arms.forEach(arm => {
                    if (arm.classList.contains('left-arm')) {
                        arm.style.animation = 'wave-left 1.5s infinite';
                    } else {
                        arm.style.animation = 'wave-right 1.5s infinite';
                    }
                });
                
                legs.forEach(leg => {
                    if (leg.classList.contains('left-leg')) {
                        leg.style.animation = 'kick-left 1.5s infinite';
                    } else {
                        leg.style.animation = 'kick-right 1.5s infinite';
                    }
                });
                break;
        }
    }
    
    // Hàm điều chỉnh ánh sáng sân khấu theo kiểu nhảy
    function adjustStageLighting(style) {
        const lightBeams = document.querySelectorAll('.light-beam');
        const spotlights = document.querySelectorAll('.spotlight');
        
        // Reset animation duration và color
        lightBeams.forEach(beam => {
            beam.style.animation = 'light-rotate 10s infinite linear';
        });
        
        // Điều chỉnh ánh sáng dựa trên kiểu nhảy
        switch(style) {
            case 'hip-hop':
                // Ánh sáng nhấp nháy nhanh cho hip-hop
                lightBeams.forEach(beam => {
                    beam.style.animation = 'light-rotate 5s infinite linear';
                    beam.style.filter = 'blur(3px) hue-rotate(280deg)';
                });
                break;
                
            case 'ballet':
                // Ánh sáng nhẹ nhàng, màu xanh dương nhạt cho ballet
                lightBeams.forEach(beam => {
                    beam.style.animation = 'light-rotate 15s infinite linear';
                    beam.style.filter = 'blur(5px) hue-rotate(200deg)';
                });
                break;
                
            case 'salsa':
                // Ánh sáng ấm, màu cam cho salsa
                lightBeams.forEach(beam => {
                    beam.style.animation = 'light-rotate 7s infinite linear';
                    beam.style.filter = 'blur(3px) hue-rotate(30deg)';
                });
                break;
                
            case 'spin':
                // Ánh sáng xoay nhanh cho spinning
                lightBeams.forEach(beam => {
                    beam.style.animation = 'light-rotate 3s infinite linear';
                    beam.style.filter = 'blur(4px)';
                });
                break;
                
            case 'backflip':
                // Ánh sáng tập trung cho backflip
                lightBeams.forEach(beam => {
                    beam.style.filter = 'blur(2px) brightness(1.5)';
                });
                break;
                
            case 'moonwalk':
                // Ánh sáng kiểu spotlight cho moonwalk
                lightBeams.forEach(beam => {
                    beam.style.animation = 'light-rotate 20s infinite linear';
                    beam.style.filter = 'blur(5px) brightness(1.2)';
                });
                break;
                
            case 'breakdance':
                // Ánh sáng nhanh và nhiều màu sắc cho breakdance
                lightBeams.forEach((beam, index) => {
                    beam.style.animation = 'light-rotate 2s infinite linear';
                    beam.style.filter = `blur(4px) hue-rotate(${index * 120}deg)`;
                });
                break;
                
            default: // Normal
                lightBeams.forEach(beam => {
                    beam.style.filter = 'blur(3px)';
                });
                break;
        }
    }
    
    // Thêm hiệu ứng nhảy mạnh tạm thời (burst dance)
    function startGrooving() {
        if (!isGrooving) {
            isGrooving = true;
            
            const prevStyle = currentDanceStyle;
            const prevAnimations = {
                container: heartContainers.map(container => container.style.animation),
                arms: arms.map(arm => arm.style.animation),
                legs: legs.map(leg => leg.style.animation)
            };
            
            // Tạo hiệu ứng nhảy mạnh hơn dựa trên kiểu hiện tại
            switch(currentDanceStyle) {
                case 'hip-hop':
                    heartContainers.forEach((container, index) => {
                        container.style.animation = `hip-hop 0.5s infinite ${index * 0.2}s`;
                    });
                    arms.forEach(arm => {
                        if (arm.classList.contains('left-arm')) {
                            arm.style.animation = 'hip-left-arm 0.5s infinite';
                        } else {
                            arm.style.animation = 'hip-right-arm 0.5s infinite';
                        }
                    });
                    legs.forEach(leg => {
                        if (leg.classList.contains('left-leg')) {
                            leg.style.animation = 'hip-left-leg 0.5s infinite';
                        } else {
                            leg.style.animation = 'hip-right-leg 0.5s infinite';
                        }
                    });
                    break;
                    
                case 'ballet':
                    heartContainers.forEach((container, index) => {
                        container.style.animation = `ballet 0.7s infinite ${index * 0.2}s`;
                    });
                    arms.forEach(arm => {
                        if (arm.classList.contains('left-arm')) {
                            arm.style.animation = 'ballet-left-arm 0.7s infinite';
                        } else {
                            arm.style.animation = 'ballet-right-arm 0.7s infinite';
                        }
                    });
                    legs.forEach(leg => {
                        if (leg.classList.contains('left-leg')) {
                            leg.style.animation = 'ballet-left-leg 0.7s infinite';
                        } else {
                            leg.style.animation = 'ballet-right-leg 0.7s infinite';
                        }
                    });
                    break;
                    
                case 'salsa':
                    heartContainers.forEach((container, index) => {
                        container.style.animation = `salsa 0.5s infinite ${index * 0.15}s`;
                    });
                    arms.forEach(arm => {
                        if (arm.classList.contains('left-arm')) {
                            arm.style.animation = 'salsa-left-arm 0.5s infinite';
                        } else {
                            arm.style.animation = 'salsa-right-arm 0.5s infinite';
                        }
                    });
                    legs.forEach(leg => {
                        if (leg.classList.contains('left-leg')) {
                            leg.style.animation = 'salsa-left-leg 0.5s infinite';
                        } else {
                            leg.style.animation = 'salsa-right-leg 0.5s infinite';
                        }
                    });
                    break;
                    
                case 'spin':
                    heartContainers.forEach((container, index) => {
                        container.style.animation = `spin 1s infinite ${index * 0.3}s`;
                    });
                    arms.forEach(arm => {
                        if (arm.classList.contains('left-arm')) {
                            arm.style.animation = 'spin-left-arm 1s infinite';
                        } else {
                            arm.style.animation = 'spin-right-arm 1s infinite';
                        }
                    });
                    legs.forEach(leg => {
                        if (leg.classList.contains('left-leg')) {
                            leg.style.animation = 'spin-left-leg 1s infinite';
                        } else {
                            leg.style.animation = 'spin-right-leg 1s infinite';
                        }
                    });
                    break;
                    
                case 'backflip':
                    heartContainers.forEach((container, index) => {
                        container.style.animation = `backflip 0.8s infinite ${index * 0.3}s`;
                    });
                    arms.forEach(arm => {
                        if (arm.classList.contains('left-arm')) {
                            arm.style.animation = 'backflip-left-arm 0.8s infinite';
                        } else {
                            arm.style.animation = 'backflip-right-arm 0.8s infinite';
                        }
                    });
                    legs.forEach(leg => {
                        leg.style.animation = 'backflip-legs 0.8s infinite';
                    });
                    break;
                    
                case 'moonwalk':
                    heartContainers.forEach((container, index) => {
                        container.style.animation = `moonwalk 2s linear infinite ${index * 0.5}s`;
                    });
                    arms.forEach(arm => {
                        if (arm.classList.contains('left-arm')) {
                            arm.style.animation = 'moonwalk-left-arm 1s infinite';
                        } else {
                            arm.style.animation = 'moonwalk-right-arm 1s infinite';
                        }
                    });
                    legs.forEach(leg => {
                        if (leg.classList.contains('left-leg')) {
                            leg.style.animation = 'moonwalk-left-leg 1s infinite';
                        } else {
                            leg.style.animation = 'moonwalk-right-leg 1s infinite';
                        }
                    });
                    break;
                    
                case 'breakdance':
                    heartContainers.forEach((container, index) => {
                        container.style.animation = `breakdance 1.2s infinite ${index * 0.3}s`;
                    });
                    arms.forEach(arm => {
                        if (arm.classList.contains('left-arm')) {
                            arm.style.animation = 'breakdance-left-arm 1.2s infinite';
                        } else {
                            arm.style.animation = 'breakdance-right-arm 1.2s infinite';
                        }
                    });
                    legs.forEach(leg => {
                        if (leg.classList.contains('left-leg')) {
                            leg.style.animation = 'breakdance-left-leg 1.2s infinite';
                        } else {
                            leg.style.animation = 'breakdance-right-leg 1.2s infinite';
                        }
                    });
                    break;
                    
                default: // Normal
                    heartContainers.forEach((container, index) => {
                        container.style.animation = `dance 0.5s infinite ${index * 0.2}s`;
                    });
                    arms.forEach(arm => {
                        if (arm.classList.contains('left-arm')) {
                            arm.style.animation = 'wave-left 0.5s infinite';
                        } else {
                            arm.style.animation = 'wave-right 0.5s infinite';
                        }
                    });
                    legs.forEach(leg => {
                        if (leg.classList.contains('left-leg')) {
                            leg.style.animation = 'kick-left 0.5s infinite';
                        } else {
                            leg.style.animation = 'kick-right 0.5s infinite';
                        }
                    });
                    break;
            }
            
            // Miệng cười tươi khi nhảy mạnh
            mouths.forEach(mouth => {
                mouth.style.cssText = 'border-bottom: 5px solid #000; border-radius: 0 0 30px 30px; height: 25px; width: 45px; left: 27px;';
            });
            
            // Tạo hiệu ứng trái tim nhấp nháy
            let colorInterval = setInterval(() => {
                const r = Math.floor(Math.random() * 100) + 155; // 155-255
                const g = Math.floor(Math.random() * 100); // 0-100
                const b = Math.floor(Math.random() * 100); // 0-100
                
                hearts.forEach(heart => {
                    heart.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                });
                arms.forEach(arm => {
                    arm.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                });
                legs.forEach(leg => {
                    leg.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                });
            }, 200);
            
            // Trở lại bình thường sau 3 giây
            setTimeout(() => {
                clearInterval(colorInterval);
                hearts.forEach(heart => {
                    heart.style.backgroundColor = '';
                });
                arms.forEach(arm => {
                    arm.style.backgroundColor = '';
                });
                legs.forEach(leg => {
                    leg.style.backgroundColor = '';
                });
                changeDanceStyle(prevStyle);
                isGrooving = false;
            }, 3000);
        }
    }
    
    // Thêm các bong bóng trái tim nhỏ bay lên
    function createHeartBubble() {
        const bubble = document.createElement('div');
        bubble.className = 'heart-bubble';
        
        // Tạo style cho bong bóng
        const size = 10 + Math.random() * 20;
        const left = 100 + Math.random() * 100;
        const animDuration = 2 + Math.random() * 3;
        
        // Thêm style inline
        bubble.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background-color: #ff3388;
            transform: rotate(45deg);
            border-radius: 5px;
            top: 150px;
            left: ${left}px;
            opacity: 0.7;
            animation: float ${animDuration}s ease-in forwards;
        `;
        
        // Tạo pseudo-elements để tạo hình trái tim
        bubble.innerHTML = `
            <style>
                .heart-bubble:before,
                .heart-bubble:after {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background-color: #ff3388;
                    border-radius: 50%;
                }
                
                .heart-bubble:before {
                    top: -50%;
                    left: 0;
                }
                
                .heart-bubble:after {
                    top: 0;
                    left: -50%;
                }
                
                @keyframes float {
                    0% {
                        transform: rotate(45deg) translateY(0) scale(1);
                        opacity: 0.7;
                    }
                    100% {
                        transform: rotate(45deg) translateY(-200px) scale(0);
                        opacity: 0;
                    }
                }
            </style>
        `;
        
        container.appendChild(bubble);
        
        // Xóa bong bóng sau khi animation kết thúc
        setTimeout(() => {
            bubble.remove();
        }, animDuration * 1000);
    }
    
    // Tạo bong bóng trái tim mỗi 800ms
    setInterval(createHeartBubble, 800);
    
    // Thêm hiệu ứng tương tác khi click vào trái tim
    hearts.forEach(heart => {
        heart.addEventListener('click', () => {
            // Bắt đầu nhảy nhót mạnh hơn
            startGrooving();
            
            // Tạo nhiều bong bóng trái tim khi click
            for (let i = 0; i < 15; i++) {
                setTimeout(createHeartBubble, i * 50);
            }
            
            // Hiệu ứng flash ánh sáng sân khấu
            flashStageLights();
        });
    });
    
    // Cũng kích hoạt khi click vào tay chân
    arms.forEach(arm => arm.addEventListener('click', startGrooving));
    legs.forEach(leg => leg.addEventListener('click', startGrooving));
    
    // Thêm sự kiện cho các nút chuyển đổi kiểu nhảy
    danceNormalBtn.addEventListener('click', () => changeDanceStyle('normal'));
    danceHipHopBtn.addEventListener('click', () => changeDanceStyle('hip-hop'));
    danceBalletBtn.addEventListener('click', () => changeDanceStyle('ballet'));
    danceSalsaBtn.addEventListener('click', () => changeDanceStyle('salsa'));
    danceSpinBtn.addEventListener('click', () => changeDanceStyle('spin'));
    danceBackflipBtn.addEventListener('click', () => changeDanceStyle('backflip'));
    danceMoonwalkBtn.addEventListener('click', () => changeDanceStyle('moonwalk'));
    danceBreakdanceBtn.addEventListener('click', () => changeDanceStyle('breakdance'));
    
    // Hiệu ứng flash ánh sáng sân khấu khi click
    function flashStageLights() {
        const lightBeams = document.querySelectorAll('.light-beam');
        const spotlights = document.querySelectorAll('.spotlight::before');
        const ceilingLights = document.querySelectorAll('.ceiling-light::after');
        const floorLights = document.querySelectorAll('.floor-light');
        const smoke = document.querySelectorAll('.smoke');
        
        // Hiệu ứng đèn sáng chớp nháy
        lightBeams.forEach(beam => {
            beam.style.opacity = '0.9';
            beam.style.filter = 'blur(5px) brightness(1.8)';
            beam.style.width = '10px';
            
            setTimeout(() => {
                beam.style.opacity = '0.5';
                beam.style.filter = 'blur(3px)';
                beam.style.width = '5px';
                
                // Áp dụng lại hiệu ứng màu sắc cho kiểu nhảy hiện tại
                adjustStageLighting(currentDanceStyle);
            }, 500);
        });
        
        // Hiệu ứng đèn treo trên trần
        ceilingLights.forEach(light => {
            light.style.boxShadow = '0 0 20px white, 0 0 40px white, 0 0 60px white';
            setTimeout(() => {
                light.style.boxShadow = '';
            }, 500);
        });
        
        // Hiệu ứng đèn sàn
        floorLights.forEach(light => {
            light.style.boxShadow = '0 0 20px white, 0 0 40px white, 0 0 60px white';
            setTimeout(() => {
                light.style.boxShadow = '';
            }, 500);
        });
        
        // Thêm hiệu ứng khói
        smoke.forEach(smokeEl => {
            smokeEl.style.opacity = '0.8';
            setTimeout(() => {
                smokeEl.style.opacity = '';
            }, 2000);
        });
    }
    
    // Hàm xử lý thay đổi số lượng trái tim
    function changeHeartCount(count) {
        // Cập nhật trạng thái nút
        heartCountBtns.forEach(btn => btn.classList.remove('active'));
        document.getElementById(`heart-count-${count}`).classList.add('active');
        
        // Hiển thị/ẩn trái tim dựa trên số lượng được chọn
        switch (count) {
            case 1:
                // Chỉ hiển thị trái tim giữa
                centerHeartContainer.classList.remove('hidden');
                leftHeartContainer.classList.add('hidden');
                rightHeartContainer.classList.add('hidden');
                break;
                
            case 2:
                // Hiển thị 2 trái tim (bên trái và bên phải)
                leftHeartContainer.classList.remove('hidden');
                rightHeartContainer.classList.remove('hidden');
                centerHeartContainer.classList.add('hidden');
                break;
                
            case 3:
                // Hiển thị cả 3 trái tim
                leftHeartContainer.classList.remove('hidden');
                centerHeartContainer.classList.remove('hidden');
                rightHeartContainer.classList.remove('hidden');
                break;
        }
        
        // Cập nhật lại kiểu nhảy để đồng bộ
        changeDanceStyle(currentDanceStyle);
    }
    
    // Thêm sự kiện cho các nút số lượng trái tim
    heartCount1Btn.addEventListener('click', () => changeHeartCount(1));
    heartCount2Btn.addEventListener('click', () => changeHeartCount(2));
    heartCount3Btn.addEventListener('click', () => changeHeartCount(3));
    
    // Thiết lập mặc định là 3 trái tim
    changeHeartCount(3);
    
    // Mặc định là kiểu nhảy bình thường
    changeDanceStyle('normal');
}); 