import React from 'react';
import "react-image-gallery/styles/image-gallery.css";
import ImageGallery from "react-image-gallery";

const images = [
    {
        original: 'https://private-user-images.githubusercontent.com/1876165/594675560-77a39875-4692-444c-a066-d3c590f667fd.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkxOTI2NjIsIm5iZiI6MTc3OTE5MjM2MiwicGF0aCI6Ii8xODc2MTY1LzU5NDY3NTU2MC03N2EzOTg3NS00NjkyLTQ0NGMtYTA2Ni1kM2M1OTBmNjY3ZmQucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI2MDUxOSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNjA1MTlUMTIwNjAyWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9ZjQ5OWFjYWJhNTI5NDhkNTE5NmRkNmQ2ODJkYTA2OTM4MzdlZDlhODBlMzQ4ZDdhZDBmMWMwMWEzNDVjYzMzZCZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmcmVzcG9uc2UtY29udGVudC10eXBlPWltYWdlJTJGcG5nIn0.WAzV0_rpRcdsBHKwKLf4awVIsa_ZRBOztKc-zDiFlHc',
        thumbnail: 'https://private-user-images.githubusercontent.com/1876165/594675560-77a39875-4692-444c-a066-d3c590f667fd.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkxOTI2NjIsIm5iZiI6MTc3OTE5MjM2MiwicGF0aCI6Ii8xODc2MTY1LzU5NDY3NTU2MC03N2EzOTg3NS00NjkyLTQ0NGMtYTA2Ni1kM2M1OTBmNjY3ZmQucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI2MDUxOSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNjA1MTlUMTIwNjAyWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9ZjQ5OWFjYWJhNTI5NDhkNTE5NmRkNmQ2ODJkYTA2OTM4MzdlZDlhODBlMzQ4ZDdhZDBmMWMwMWEzNDVjYzMzZCZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmcmVzcG9uc2UtY29udGVudC10eXBlPWltYWdlJTJGcG5nIn0.WAzV0_rpRcdsBHKwKLf4awVIsa_ZRBOztKc-zDiFlHc',
    },
    {
        original: 'https://private-user-images.githubusercontent.com/1876165/594675544-3d11553d-bacf-4b83-811e-faf8d55599b1.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkxOTI2NjIsIm5iZiI6MTc3OTE5MjM2MiwicGF0aCI6Ii8xODc2MTY1LzU5NDY3NTU0NC0zZDExNTUzZC1iYWNmLTRiODMtODExZS1mYWY4ZDU1NTk5YjEucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI2MDUxOSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNjA1MTlUMTIwNjAyWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9OWRiYjFkMDVjZDhhZDUzYzU3ZGUwMTkxMWIxMjk5OTc0MDE3MjcyMWNkZTQzZDUwMDAzNTA2M2JlMmQ0YTk1OSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmcmVzcG9uc2UtY29udGVudC10eXBlPWltYWdlJTJGcG5nIn0.ckgZDu5ozGlnF6NgT0cnlpyel79MgX052DJ7KjARWTQ',
        thumbnail: 'https://private-user-images.githubusercontent.com/1876165/594675544-3d11553d-bacf-4b83-811e-faf8d55599b1.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkxOTI2NjIsIm5iZiI6MTc3OTE5MjM2MiwicGF0aCI6Ii8xODc2MTY1LzU5NDY3NTU0NC0zZDExNTUzZC1iYWNmLTRiODMtODExZS1mYWY4ZDU1NTk5YjEucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI2MDUxOSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNjA1MTlUMTIwNjAyWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9OWRiYjFkMDVjZDhhZDUzYzU3ZGUwMTkxMWIxMjk5OTc0MDE3MjcyMWNkZTQzZDUwMDAzNTA2M2JlMmQ0YTk1OSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmcmVzcG9uc2UtY29udGVudC10eXBlPWltYWdlJTJGcG5nIn0.ckgZDu5ozGlnF6NgT0cnlpyel79MgX052DJ7KjARWTQ'
    },
    {
        original: 'https://private-user-images.githubusercontent.com/1876165/594675528-328a3fdb-43a0-420d-b4c7-1c261863e2f8.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkxOTI5NzksIm5iZiI6MTc3OTE5MjY3OSwicGF0aCI6Ii8xODc2MTY1LzU5NDY3NTUyOC0zMjhhM2ZkYi00M2EwLTQyMGQtYjRjNy0xYzI2MTg2M2UyZjgucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI2MDUxOSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNjA1MTlUMTIxMTE5WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9YTM0NTVkYTZmMjA2OTI4NmE2OWY4MGU0YWI0M2VkZjE3OGY5YzhiMzFmNjYyNDg3MWZmYTdkMTRlNTBhNzVlZiZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmcmVzcG9uc2UtY29udGVudC10eXBlPWltYWdlJTJGcG5nIn0.nGycXTaR03j-feblRhoWo2iQtc-ekT1YPe5hlcKdEM8',
        thumbnail: 'https://private-user-images.githubusercontent.com/1876165/594675528-328a3fdb-43a0-420d-b4c7-1c261863e2f8.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkxOTI5NzksIm5iZiI6MTc3OTE5MjY3OSwicGF0aCI6Ii8xODc2MTY1LzU5NDY3NTUyOC0zMjhhM2ZkYi00M2EwLTQyMGQtYjRjNy0xYzI2MTg2M2UyZjgucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI2MDUxOSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNjA1MTlUMTIxMTE5WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9YTM0NTVkYTZmMjA2OTI4NmE2OWY4MGU0YWI0M2VkZjE3OGY5YzhiMzFmNjYyNDg3MWZmYTdkMTRlNTBhNzVlZiZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmcmVzcG9uc2UtY29udGVudC10eXBlPWltYWdlJTJGcG5nIn0.nGycXTaR03j-feblRhoWo2iQtc-ekT1YPe5hlcKdEM8'
    },
    {
        original: 'https://private-user-images.githubusercontent.com/1876165/594675447-89802742-881f-4d35-a78d-d1c6caa00e94.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkxOTI5NzksIm5iZiI6MTc3OTE5MjY3OSwicGF0aCI6Ii8xODc2MTY1LzU5NDY3NTQ0Ny04OTgwMjc0Mi04ODFmLTRkMzUtYTc4ZC1kMWM2Y2FhMDBlOTQucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI2MDUxOSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNjA1MTlUMTIxMTE5WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9ZjdjZTM2OWY4ZWJiZTk4OWYyZDMwZmFhNWZlYTQ4Y2VmNWY5MmRhNzdmZDUxYzQ4MzFkYzU2MDg2ZTU3NjA5MSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmcmVzcG9uc2UtY29udGVudC10eXBlPWltYWdlJTJGcG5nIn0.LUypPyF8gQEP9eXUuIM65ullU1KHC3MVpLNPMPGSsf0',
        thumbnail: 'https://private-user-images.githubusercontent.com/1876165/594675447-89802742-881f-4d35-a78d-d1c6caa00e94.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkxOTI5NzksIm5iZiI6MTc3OTE5MjY3OSwicGF0aCI6Ii8xODc2MTY1LzU5NDY3NTQ0Ny04OTgwMjc0Mi04ODFmLTRkMzUtYTc4ZC1kMWM2Y2FhMDBlOTQucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI2MDUxOSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNjA1MTlUMTIxMTE5WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9ZjdjZTM2OWY4ZWJiZTk4OWYyZDMwZmFhNWZlYTQ4Y2VmNWY5MmRhNzdmZDUxYzQ4MzFkYzU2MDg2ZTU3NjA5MSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmcmVzcG9uc2UtY29udGVudC10eXBlPWltYWdlJTJGcG5nIn0.LUypPyF8gQEP9eXUuIM65ullU1KHC3MVpLNPMPGSsf0'
    },
    {
        original: 'https://private-user-images.githubusercontent.com/1876165/594675433-236abf5b-d385-4382-9527-50c65f9cc9ed.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkxOTI5NzksIm5iZiI6MTc3OTE5MjY3OSwicGF0aCI6Ii8xODc2MTY1LzU5NDY3NTQzMy0yMzZhYmY1Yi1kMzg1LTQzODItOTUyNy01MGM2NWY5Y2M5ZWQucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI2MDUxOSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNjA1MTlUMTIxMTE5WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9N2NjODdkYzE0MmUwY2IxMDUwYTM4MWQ0OTQ3NjE5Mzc4YWU0ZDBjNGVkMWU2NmVjZGUwZGY5MTI2NGE0OWRmYyZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmcmVzcG9uc2UtY29udGVudC10eXBlPWltYWdlJTJGcG5nIn0.XpEVyE04DKUOWZ0R6Wi0ccVuYVbrRH7f1i6FqLhHxn0',
        thumbnail: 'https://private-user-images.githubusercontent.com/1876165/594675433-236abf5b-d385-4382-9527-50c65f9cc9ed.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkxOTI5NzksIm5iZiI6MTc3OTE5MjY3OSwicGF0aCI6Ii8xODc2MTY1LzU5NDY3NTQzMy0yMzZhYmY1Yi1kMzg1LTQzODItOTUyNy01MGM2NWY5Y2M5ZWQucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI2MDUxOSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNjA1MTlUMTIxMTE5WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9N2NjODdkYzE0MmUwY2IxMDUwYTM4MWQ0OTQ3NjE5Mzc4YWU0ZDBjNGVkMWU2NmVjZGUwZGY5MTI2NGE0OWRmYyZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmcmVzcG9uc2UtY29udGVudC10eXBlPWltYWdlJTJGcG5nIn0.XpEVyE04DKUOWZ0R6Wi0ccVuYVbrRH7f1i6FqLhHxn0'
    },
    {
        original: 'https://private-user-images.githubusercontent.com/1876165/594675399-8f2a784b-8334-4abf-a007-70a028b0b524.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkxOTI5NzksIm5iZiI6MTc3OTE5MjY3OSwicGF0aCI6Ii8xODc2MTY1LzU5NDY3NTM5OS04ZjJhNzg0Yi04MzM0LTRhYmYtYTAwNy03MGEwMjhiMGI1MjQucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI2MDUxOSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNjA1MTlUMTIxMTE5WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9MmU0Y2YzMjMwNTgyNWM3MTFhMzg2N2RhZWMyZjIwZDVjYWRjMmUwNmYzZDBmZDU1OTRmMjExMzE5NGFkNWVlYSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmcmVzcG9uc2UtY29udGVudC10eXBlPWltYWdlJTJGcG5nIn0.BtCiQN2bRTvjcS_ybGlpkp7frheJpRlHmgxiS0uK7Ts',
        thumbnail: 'https://private-user-images.githubusercontent.com/1876165/594675399-8f2a784b-8334-4abf-a007-70a028b0b524.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkxOTI5NzksIm5iZiI6MTc3OTE5MjY3OSwicGF0aCI6Ii8xODc2MTY1LzU5NDY3NTM5OS04ZjJhNzg0Yi04MzM0LTRhYmYtYTAwNy03MGEwMjhiMGI1MjQucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI2MDUxOSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNjA1MTlUMTIxMTE5WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9MmU0Y2YzMjMwNTgyNWM3MTFhMzg2N2RhZWMyZjIwZDVjYWRjMmUwNmYzZDBmZDU1OTRmMjExMzE5NGFkNWVlYSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmcmVzcG9uc2UtY29udGVudC10eXBlPWltYWdlJTJGcG5nIn0.BtCiQN2bRTvjcS_ybGlpkp7frheJpRlHmgxiS0uK7Ts'
    }
];

class Ollama4jUIImageCarousel extends React.Component {
    renderItem = (item) => {
        return (
            <div className="image-gallery-image" style={{ textAlign: 'center' }}>
                <img
                    src={item.original}
                    alt=""
                    style={{ maxHeight: '500px', width: 'auto', maxWidth: '100%' }}
                />
            </div>
        );
    };

    render() {
        return (
            <div style={{ margin: '0 auto', maxWidth: '800px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                    <h2>Explore the stuff we have built with Ollama4j</h2>
                    <h4>
                        <a href="https://github.com/ollama4j/doota" target='_blank' rel="noopener noreferrer">
                            Doota - A modern agentic application for the Ollama ecosystem.
                        </a>
                    </h4>
                </div>
                {/* <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <iframe
                        width="720"
                        height="405"
                        src="https://www.youtube.com/embed/olTKEu6oXj8"
                        title="Doota - Intro"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ maxWidth: '100%', borderRadius: '12px' }}
                    ></iframe>
                    </div>
                </div>    */}
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <iframe
                        width="720"
                        height="405"
                        src="https://www.youtube.com/embed/eb2L-pDcU40"
                        title="Doota - Agentic Capabilities"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ maxWidth: '100%', borderRadius: '12px' }}
                    ></iframe>
                    </div>
                </div>   
                {/* <ImageGallery items={images} renderItem={this.renderItem} /> */}
            </div>
        );
    }
}

export default Ollama4jUIImageCarousel;
