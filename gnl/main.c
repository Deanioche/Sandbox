/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   main.c                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: dohyulee <dohyulee@student.42seoul.kr>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/02/13 22:17:46 by dohyulee          #+#    #+#             */
/*   Updated: 2022/02/14 17:29:08 by dohyulee         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <stdio.h>
#include <fcntl.h>
#include <stdlib.h>
#include "get_next_line.h"

// gcc -Wall -Wextra -Werror main.c get_next_line.c get_next_line_utils.c -D BUFFER_SIZE=42 && ./a.out
// gcc -Wall -Wextra -Werror main.c get_next_line.c get_next_line_utils.c && ./a.out

int main(void)
{
    int fd = open("./text.txt", O_RDONLY);
    char *s;

    while ((s = get_next_line(fd)) > 0)
    {
        printf("%s", s);
        free(s);
        s = NULL;
    }
    system("leaks a.out");
    return (0);
}

